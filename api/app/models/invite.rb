class Invite < ApplicationRecord
  belongs_to :interviewee
  belongs_to :recruiter
  belongs_to :assessment
end
