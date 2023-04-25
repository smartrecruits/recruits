class AssessmentsCodeChallengesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :verify_auth

    def create 
        code = AssessmentsCodeChallenge.create!(AssessCode_params)
        render json: code, status: :created  
    end

    def index 
        codes = AssessmentsCodeChallenge.all 
        render json: codes
    end

    def show
        code = find_AssessCode
        render json: code 
    end 

    def destroy 
        code = find_AssessCode
        code.destroy 
        head :no_content
    end

    private 

    def find_AssessCode
        AssessmentsCodeChallenge.find(params[:id])
    end

    def AssessCode_params 
        params.permit(:assessment_id,:code_challenge_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
