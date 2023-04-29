require_relative '../models/concerns/codewars_module'

class AssessmentsController < ApplicationController
    before_action :verify_auth
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        assessments = Assessment.all
        render json: assessments
    end

    def create 
        assessment = Assessment.create!(assessment_params)
        render json: assessment, status: :created 
    end

    def show
        assessment = Assessment.find(params[:id])
        render json: assessment
    end

    def index_completed
        assessments = Assessment.where(done: true, accepted: true) 
        render json: assessments
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

    private
    def assessment_params 
        params.require(:assessment).permit(:name,:reviewed,:accepted,:duedate,:recruiter_id,:done)
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
