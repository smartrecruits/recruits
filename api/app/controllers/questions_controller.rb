class QuestionsController < ApplicationController
    # before_action :set_question, only: [:show, :edit, :update, :destroy]
    before_action :verify_auth
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
      questions = recruiter.questions.all
      render json: questions
    end
  
    def show
      question = Question.find(params[:id])
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
        render json: { errors: question.errors.full_messages.join(', ') }, status: :unprocessable_entity
      end
    end
  
    def destroy
      question = recruiter.questions.find(params[:id])
      question.destroy
      head :no_content
    end

    def check_answer
      current_interviewee = Interviewee.find(params[:interviewee_id])
      response = current_interviewee.responses.find_or_create_by(question_id: params[:question_id])
      response.update(chosen_answer: params[:chosen_answer])
      response.mark_as_correct
      if response.correct
        response.update(grades: response.grades + 1)
      end
      render json: { correct: response.correct }
    end
  
    private
  
    def question_params
      params.require(:question).permit(:recruiter_id,:content, :answer_1, :answer_2, :answer_3, :answer_4, :correct_answer,:totalAttempts)
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
  end
  