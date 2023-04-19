class QuestionsController < ApplicationController
   # before_action :set_question, only: [:show, :edit, :update, :destroy]
  before_action :verify_auth



    def index
      render json: Question.all
    end
  
    def show
      question = Question.find(params[:id])
      render json: question
    end
    #   def show 
    # def show
      # def show 
      #   question = Question.includes(answers: :user).find_by(id: params[:id])
      #   if question 
      #     render json: {
      #       id: question.id,
      #       content: content.id,
      #       answers: question.answers,
      #       feedback: feedback.id,
      #       assessment: assessment_id
      #     }
      #   else
      #     render json: { error: "Question not found" }, status: :not_found
      #   end
  
    def create
      question = recruiter.question.new(question_params)

      if question.save
        #render json: question, status: :created
        render json: question.slice(:id, :question, :content, :answers, :feedback, :assessment_id), status: :created

      else
        render json: { errors: question.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      question = Question.find(params[:id])
      if question.update(question_params)
        render json: question
      else
        render json: { error: question.errors.full_messages.join(', ') }, status: :unprocessable_entity
      end
    end
  
    def destroy
      question = Question.find(params[:id])
      question.destroy
      head :no_content
    end
  
    private
  
    def question_params
      params.require(:question).permit(:content, :feedback, :assessment_id)
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
  