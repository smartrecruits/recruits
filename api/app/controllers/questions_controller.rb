class QuestionsController < ApplicationController
    before_action :set_question, only: [:show, :edit, :update, :destroy]




    def index
      render json: Question.all
    end
  
    def show
      question = Question.find(params[:id])
      render json: question
    end
  
    def create
      question = Question.new(question_params)
      if question.save
        render json: question, status: :created
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
      params.require(:question).permit(:question, :feedback, :assessment_id)
    end
  
  end
  