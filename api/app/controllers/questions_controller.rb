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
      question = Question.find(params[:question_id])
      assessment.questions << question
      render json:assessment
    end

    def unassign_from_assessment
      assessment = Assessment.find(params[:assessment_id])
      question = Question.find(params[:question_id])
      assessment.questions.delete(question)
      render json: assessment
    end

    def check_answer
      current_interviewee = Interviewee.find(params[:interviewee_id])
      response = current_interviewee.responses.find_or_create_by(question_id: params[:question_id])
      response.update(chosen_answer: params[:chosen_answer])
      response.mark_as_correct
      if response.correct
        question = Question.find(params[:question_id])
        question.update(grades: question.grades + 1)
      end
      render json: { correct: response.correct }
    end
  
    private
  
    def question_params
      params.require(:question).permit(:content, :answer_1, :answer_2, :answer_3, :answer_4, :correct_answer, :assessment_id)
    end
  
  end
  