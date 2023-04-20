class RecruiterMailer < ApplicationMailer

    def invites(recruiter,interviewee,invite)
        @recruiter = recruiter
        @interviewee = interviewee
        @invite = invite
        mail to: interviewee.email, subject:"Invite"
    end
end
