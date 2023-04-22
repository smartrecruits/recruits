class AnswersController < ApplicationController
    before_action :set_answer, only: [:show, :update, :destroy]
    before_action :verify_auth
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET /answers
    def index
      answers = Answer.all
      render json: answers
    end
  
    # GET /answers/1
    def show
      answer = Answer.find(params[:id])
      render json: answer
    end
  
    # POST /answers
    def create
      answer = Answer.new(answer_params)
      if answer.save
        render json: answer, status: :created
      else
        render json: answer.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /answers/1
    def update
      if answer.update(answer_params)
        render json: answer
      else
        render json: answer.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /answers/1
    def destroy
      answer = Answer.find(params[:id])
      answer.destroy
    end
  
    private

    def answer_params
      params.require(:answer).permit(:content,:code_challenge_id, :assessment_id, :interviewee_id,:grades,:feedback)
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  end
  