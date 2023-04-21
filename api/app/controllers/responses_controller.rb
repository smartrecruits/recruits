class ResponsesController < ApplicationController

    def create 
        response = Response.find_or_create_by(response_params)
        if response.persisted?
            # Response already exists
            render json: response, status: :ok
        else
            # Response was just created
            render json: response, status: :created
        end
    end
    def update
        @response = Response.find(params[:id])
        if @response.update(response_params)
          render json: @response, status: :ok
        else
          render json: { errors: @response.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def index 
        interviewee = Interviewee.find(params[:interviewee_id])
        questions = interviewee.questions
        responses = interviewee.responses.includes(:question) 
        render json: responses
    end

    private 

    def response_params 
        params.permit(:question_id,:interviewee_id,:chosen_answer,:correct,:feedback)
    end
end
