class AssessmentsQuestionsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :verify_auth

    def create 
        question = AssessmentsQuestion.create!(AssessQuest_params)
        render json: question, status: :created  
    end

    def index 
        questions = AssessmentsQuestion.all 
        render json: questions
    end

    def show
        code = find_AssessQuest
        render json: code 
    end 

    def destroy 
        code = find_AssessQuest
        code.destroy 
        head :no_content
    end

    private 

    def find_AssessQuest
        AssessmentsQuestion.find(params[:id])
    end

    def AssessQuest_params 
        params.permit(:assessment_id,:question_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
