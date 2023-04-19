class InvitesController < ApplicationController
    before_action :verify_auth
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create 
        inter = Interviewee.find(params[:id])
        invite = recruiter.invites.create!(invite_params)
        RecruiterMailer.invites(recruiter,inter).deliver_now
        render json: invite, status: :created
    end

    def index 
        invites = recruiter.invites.all 
        render json: invites 
    end

    def destroy 
        invite = find_invite
        invite.destroy
        head :no_content
    end

    def update 
        invite = Invite.find(params[:id])
        if invite.interviewee == interviewee
            invite.update!(invite_params)
            render json: invite, status: :ok
        else
            render json: { errors: 'Access denied' }, status: :unauthorized
        end
    end

    private

    def find_invite 
        recruiter.invites.find(params[:id])
    end

    def invite_params
        params.permit(:recruiter_id,:interviewee_id,:status)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
