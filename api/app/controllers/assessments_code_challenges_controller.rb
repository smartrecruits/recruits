require_relative '../models/concerns/codewars_module'

class AssessmentsCodeChallengesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :verify_auth

    def create 
        begin 
            code_challenge = CodeChallenge.find_by(codewars_id: assesscode_params[:code_challenge_id].to_s) || CodeChallenge.find(assesscode_params[:code_challenge_id].to_i)
        rescue ActiveRecord::RecordNotFound
            # If the code challenge does not exist in the code_challenges table, create a new one
          challenge = CodeChallenge.one_code(assesscode_params[:code_challenge_id].to_s)
        #   puts "code #{challenge}"
          code_challenge = CodeChallenge.create!(
            codewars_id: challenge[0]['id'],
            name: challenge[0]['name'],
            description: challenge[0]['description'],
            languages: challenge[0]['languages'].join(','),
            totalAttempts: challenge[0]['totalAttempts'].to_i,
            totalCompleted: challenge[0]['totalCompleted'].to_i,
          )
        end
        # Create a new record in the assessments_code_challenges table
        code = AssessmentsCodeChallenge.create!(
          assessment_id: assesscode_params[:assessment_id].to_i,
          code_challenge_id: code_challenge.id
        )
    
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
        params.permit(:assessment_id,:code_challenge_id,:codewars_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
