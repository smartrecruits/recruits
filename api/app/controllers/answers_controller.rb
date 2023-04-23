class AnswersController < ApplicationController
<<<<<<< HEAD
    before_action :set_answer, only: [:show, :update, :destroy]
    before_action :verify_auth
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
=======
>>>>>>> d5cab90122950c5f6c8e24951b2644b2a3b32c5f

  
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
<<<<<<< HEAD
      answer = Answer.new(answer_params)
      if answer.save
        render json: answer, status: :created
=======
      @answer = Answer.new(answer_params)
    
      if @answer.save
        render json: @answer, status: :created, location: @answer
>>>>>>> d5cab90122950c5f6c8e24951b2644b2a3b32c5f
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
<<<<<<< HEAD

    def answer_params
      params.require(:answer).permit(:content,:code_challenge_id, :assessment_id, :interviewee_id,:grades,:feedback)
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
=======
      
      def set_answer
        @answer = Answer.find(params[:id])
      end
  
    
      def answer_params
        params.require(:answer).permit(:content, :question_id, ,:answer1, :answer2, :answer3, :assessment_id, :interviewee_id)
      end
      
>>>>>>> d5cab90122950c5f6c8e24951b2644b2a3b32c5f
  end
  