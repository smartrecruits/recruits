class RecruitersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def register
        recruiter = Recruiter.create(user_params)
        if recruiter.valid?
            save_user(recruiter.id)
            render json: recruiter,status: :created
        else
            render json: {errors: recruiter.errors}, status: :unprocessable_entity
        end 
    end

    def login 
        sql = "username = :username OR email = :email"
        recruiter = Recruiter.where(sql, {username: recruiter_params[:username], email: recruiter_params[:email]}).first
        if recruiter&.authenticate(recruiter_params[:password])
            save_user(recruiter.id)
            token = encode(user.id,user.email)
            render json: {user: recruiter, token: token}
        else
            render json: {errors: "invalid username or password"}, status: :unauthorized
        end
    end

    def delete_account
        user = Recruiter.find(params[:id])
        user.destroy 
        head :no_content
    end

    def show
        user = Recruiter.find(params[:id])
        render json: user 
    end

    def logout
        remove_user
    end

    def reset_password
        user = Recruiter.find_by(email: params[:email])
        if user.present?
            user.update(password: params[:new_password])
            render json: {message: "Password reset successful"}
        else
            render json: {errors: "Email not found"}, status: :not_found
        end
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def recruiter_params 
        params.permit(:username,:email,:password,:firstname,:lastname,:company)
    end
end
