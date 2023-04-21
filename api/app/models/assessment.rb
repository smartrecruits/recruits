
class Assessment < ApplicationRecord
  # belongs_to :interviewee
  has_many :interviewees
  belongs_to :recruiter
  has_many :questions
  has_many :invites 
  has_many :code_challenges
end
