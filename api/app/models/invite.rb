class Invite < ApplicationRecord
  belongs_to :interviewee
  belongs_to :recruiter
end
