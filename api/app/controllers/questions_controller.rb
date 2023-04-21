class QuestionsController < ApplicationController


  before_action :verify_auth


    def index
      render json: recruiter.question.all
    end
  
    def show
      question = recruiter.question.includes(params[:id])
      render json: question
    end
    
    def create
      question = recruiter.questions.new(question_params)
      if question.save
        render json: question, status: :created
      else
        render json: { errors: question.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      question = recruiter.questions.find(params[:id])
      if question.update(question_params)
        render json: question
      else
        render json: { error: question.errors.full_messages.join(', ') }, status: :unprocessable_entity
      end
    end
  
    def destroy
      question = recruiter.questions.find(params[:id])
      question.destroy
      head :no_content
    end

    def assign_to_assessment
      assessment = Assessment.find(params[:assessment_id])
      question = recruiter.questions.find(params[:question_id])
      assessment.questions << question
      render json:assessment
    end

    def unassign_from_assessment
      assessment = Assessment.find(params[:assessment_id])
      question = recruiter.questions.find(params[:question_id])
      assessment.questions.delete(question)
      render json: assessment
    end
  
    private
  
    def question_params
      params.require(:question).permit(:question, :content, :answers, :answer2, :answer3, :feedback, :assessment_id)
    end

  # def verify_auth
  #   auth_headers = request.headers['Authorization']
  #   if !auth_headers
  #       render json: {message: 'Your request is not authorized'}, status: 401
  #   else
  #       token = auth_headers.split(' ')[1]
  #       save_user(:uid)
  #   end
  # end
  
  end
  