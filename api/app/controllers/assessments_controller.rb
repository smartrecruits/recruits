class AssessmentsController < ApplicationController
    # before_action :verify_auth
    def index 
        assessments = Assessment.code_challenges
        render json: assessments
    end
end
