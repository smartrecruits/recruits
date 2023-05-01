class CodeChallengesController < ApplicationController
  before_action :verify_auth
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
      api_codes =  CodeChallenge.code_challenges
      recruiter_codes = CodeChallenge.all
      codes = api_codes + recruiter_codes
      render json: codes, status: :ok
    end

    def show 
      # code = CodeChallenge.one_code(params[:id])
      code = CodeChallenge.find(params[:id])
      if code
        render json: code, status: :ok
      else
        render json: { errors: "Code challenge not found" }, status: :not_found
      end
    end

    def create 
      code = CodeChallenge.create!(code_challenge_params)
      render json: code, status: :created
    end

    def update 
      code = CodeChallenge.find(params[:id])
      code.update!(code_challenge_params)
      render json: code, status: :ok
    end

    private 

    def code_challenge_params 
      params.permit(:description,:languages,:name,:totalAttempts,:totalCompleted,:codewars_id)
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
