class RecruiterMailer < ApplicationMailer

    def invites(recruiter,interviewee)
        @recruiter = recruiter
        @interviewee = interviewee
        mail to: interviewee.email, subject:"Invite"
    end
end
