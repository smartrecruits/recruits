require_relative '../models/concerns/codewars_module'

class AssessmentsCodeChallengesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :verify_auth

    def create 
        code = AssessmentsCodeChallenge.create!(assesscode_params)
        render json: code, status: :created  
    end

    def index 
        codes = AssessmentsCodeChallenge.all 
        render json: codes
    end

    def show
        code = find_assesscode
        render json: code 
    end 

    def destroy 
        code = find_assesscode
        code.destroy 
        head :no_content
    end

    private 

    def find_assesscode
        AssessmentsCodeChallenge.find(params[:id])
    end

    def assesscode_params 
        params.permit(:assessment_id,:code_challenge_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
