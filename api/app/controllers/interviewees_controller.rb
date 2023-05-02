class IntervieweesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def register
        user = Interviewee.create(interviewee_params)
        if user.valid? 
            # save_user(user.id)
            render json: user,status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end 
    end

    def login 
        sql = "username = :username OR email = :email"
        user = Interviewee.where(sql, {username: interviewee_params[:username], email: interviewee_params[:email]}).first
        if user&.authenticate(interviewee_params[:password])
            token = encode(user.id,user.email)
            save_user(token)
            render json: {user: user, token: token}
        else
            render json: {errors: "invalid username or password"}, status: :unauthorized
        end
    end

    def delete_account
        user = Interviewee.find(params[:id])
        user.destroy 
        head :no_content
    end

    def show
        user = Interviewee.find(params[:id])
        render json: user, include: ['invites', 'invites.assessment', 'invites.assessment.questions','invite.assessment.code_challenges','invites.assessment.questions.responses','invite.assessment.code_challenges.answers']
    end

    def show_grades
        interviewee = Interviewee.find(params[:id])
        assessment = interviewee.assessment
    
        if assessment.reviewed
          grades = interviewee.responses
                                     .where(question_id: assessment.questions.pluck(:id))
                                     .sum(:grades)
          render json: { grades: grades }
        else
          render json: { errors: "Grades not available yet. Please wait for the assessment to be reviewed." }
        end
    end


    def logout
        remove_user
    end

    def index 
        interviewees = Interviewee.all 
        render json: interviewees,include: ['invites', 'invites.assessment', 'invites.assessment.questions','invite.assessment.code_challenges','invites.assessment.questions.responses','invite.assessment.code_challenges.answers']
    end

    def completed_assessments
        interviewees = Interviewee.joins(:completed_assessments).distinct
        render json: interviewees, include: ['completed_assessments']
    end

    def sort_by_score
        interviewees = Interviewee.joins(:responses)
                                  .group('interviewees.id')
                                  .select('interviewees.*, SUM(responses.correct::integer) AS total_score')
                                  .order('total_score DESC')
        render json: interviewees
    end

    def show_responses
        interviewee = Interviewee.find(params[:interviewee_id])
        assessment = interviewee.assessments.find(params[:assessment_id])
        responses = assessment.responses.includes(:question)
        render json: responses,include: [:question]
    end

    def show_answers
        interviewee = Interviewee.find(params[:interviewee_id])
        assessment = interviewee.assessments.find(params[:assessment_id])
        answers = assessment.answers.includes(:code_challenge)
        render json: answers, include: [:code_challenge]
      end

    def reset_password
        user = Interviewee.find_by(email: params[:email])
        if user.present?
            user.update(password: params[:new_password])
            render json: {message: "Password reset successful"}
        else
            render json: {errors: "Email not found"}, status: :not_found
        end
    end

    private 
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def interviewee_params 
        params.permit(:username,:email,:password,:bio,:firstname,:lastname)
    end

end
