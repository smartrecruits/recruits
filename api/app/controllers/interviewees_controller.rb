class IntervieweesController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def register
        user = Interviewee.create(user_params)
        if user.valid?
            save_user(user.id)
            render json: user,status: :created
        else
            render json: {errors: user.errors}, status: :unprocessable_entity
        end 
    end

    def login 
        sql = "username = :username OR email = :email"
        user = Interviewee.where(sql, {username: interviewee_params[:username], email: interviewee_params[:email]}).first
        if user&.authenticate(user_params[:password])
            save_user(user.id)
            token = encode(user.id,user.email)
            render json: {user: user, token: token}
        else
            render json: {errors: "invalid username or password"}, status: :unauthorized
        end
    end

    def delete_account
        user = Interviewee.find(params[:id])
        user.destroy 
        head :no_content
    end

    def show
        user = Interviewee.find(params[:id])
        render json: user 
    end


    def logout
        remove_user
    end

    def reset_password
        user = Interviewee.find_by(email: params[:email])
        if user.present?
            user.update(password: params[:new_password])
            render json: {message: "Password reset successful"}
        else
            render json: {errors: "Email not found"}, status: :not_found
        end
    end

    private 
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def interviewee_params 
        params.permit(:username,:email,:password,:bio,:firstname,:lastname)
    end

end
