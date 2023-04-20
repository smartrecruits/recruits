class CodeChallengesController < ApplicationController

    def index 
      codes =  CodeChallenge.code_challenges
      render json: codes, status: :ok
    end

    def assign_to_assessment
      assessment = Assessment.find(params[:assessment_id])
      code_challenge = CodeChallenge.find(params[:code_challenge_id])
      assessment.code_challenges << code_challenge
      render json: assessment
    end

    def unassign_from_assessment
      assessment = Assessment.find(params[:assessment_id])
      code_challenge = CodeChallenge.find(params[:code_challenge_id])
      assessment.code_challenges.delete(code_challenge)
      render json: assessment
    end
end
