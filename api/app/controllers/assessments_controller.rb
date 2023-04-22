require_relative './concerns/codewars_module'

class AssessmentsController < ApplicationController
    before_action :verify_auth

    def index 
        assessments = Assessment.all
        render json: assessments
    end

    def show
        @assessment = Assessment.find(params[:id])
        @questions = @assessment.questions
        @code_challenges = @assessment.code_challenges
        render json: { questions: @questions, code_challenges: @code_challenges }, status: :ok
    end

    def destroy 
        assessment = Assessment.find(params[:id])
        assessment.destroy 
        head :no_content
    end

    def update 
        assessment = Assessment.find(params[:id])
        assessment.update!(assessment_params)
        render json: assessment
    end

    def add_question
        @assessment = Assessment.find(params[:assessment_id])
        @question = Question.find(params[:question_id])
        @assessment.questions << @question
        render json: @assessment
    end
    
    def remove_question
        @assessment = Assessment.find(params[:assessment_id])
        @question = Question.find(params[:question_id])
        @assessment.questions.delete(@question)
        render json: @assessment
    end

    def add_code_challenge
        assessment = Assessment.find(params[:assessment_id])
        code_challenge = CodeChallenge.code_one(params[:code_challenge_id])
        if code_challenge.nil?
            code_challenge = CodeChallenge.find(params[:code_challenge_id])
        end
        assessment.code_challenges << code_challenge
        render json: assessment
    end

    def remove_code_challenge
        assessment = Assessment.find(params[:assessment_id])
        code_challenge = CodeChallenge.code_one(params[:code_challenge_id])
        if code_challenge.nil?
            code_challenge = CodeChallenge.find(params[:code_challenge_id])
        end
        assessment.code_challenges.delete(code_challenge)
        render json: assessment
    end

    private
    def assessment_params 
        params.permit(:name,:reviewed,:accepted,:duedate,:recruiter_id)
    end
    
end
