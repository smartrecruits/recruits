class InvitesController < ApplicationController
    before_action :verify_auth
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create 
        inter = Interviewee.find(params[:interviewee_id])
        invite = recruiter.invites.create!(invite_params.merge(status: "pending"))
        RecruiterMailer.invites(recruiter,inter,invite).deliver_now
        render json: invite, status: :created
    end

    def index 
        invites = recruiter.invites.all 
        render json: invites 
    end

    def index_interviewee_invites
        interviewee = Interviewee.find(params[:interviewee_id])
        invites = interviewee.invites.all 
        render json: invites
    end

    def show_interviewee_invite
        interviewee = Interviewee.find(params[:interviewee_id])
        invite = interviewee.invites.find(params[:id]) 
        render json: invite
    end

    def destroy 
        invite = find_invite
        invite.destroy
        head :no_content
    end

    def accept_assessment
        inter = Interviewee.find(params[:interviewee_id])
        invite = Invite.find(params[:id])
        assessment = invite.assessment
    
        if invite.interviewee == inter && assessment
          assessment.update!(accepted: true)
          invite.update!(status: 'accepted')
           # update due date if accepted is true
            if assessment.accepted
                assessment.update!(duedate: Date.today + 7.days)
            end
          render json: { assessment: assessment, invite: invite }, status: :ok
        else
          render json: { errors: 'Access denied or assessment not found' }, status: :unprocessable_entity
        end
    end

    def update 
        inter = Interviewee.find(params[:interviewee_id])
        invite = Invite.find(params[:id])
        if invite.interviewee == inter
            invite.update!(invite_params)
            render json: invite, status: :ok
        else
            render json: { errors: 'Access denied' }, status: :unauthorized
        end
    end


  def accept
    inter = Interviewee.find(params[:interviewee_id])
    invite = Invite.find(params[:id])
    if invite.interviewee == inter
        invite.update!(status: 'accepted')
        render json: invite, status: :ok
        # redirect_to root_path, notice: 'Invite accepted'
    else
        render json: { errors: 'Access denied' }, status: :unauthorized
    end
  end

  def decline
    inter = Interviewee.find(params[:interviewee_id])
    invite = Invite.find(params[:id])
    if invite.interviewee == inter
        invite.update!(status:'rejected')
        render json: invite, status: :ok

        # redirect_to root_path, notice: 'Invite declined'
    else
        render json: { errors: 'Access denied' }, status: :unauthorized
    end
  end

    private

    def find_invite 
        recruiter.invites.find(params[:id])
    end

    def invite_params
        params.permit(:recruiter_id,:interviewee_id,:assessment_id,:status)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
