
class Assessment < ApplicationRecord
  belongs_to :recruiter
  has_many :assessments_code_challenges
  has_many :assessments_questions
  has_many :questions, through: :assessments_questions
  has_many :invites 
  has_many :interviewees, through: :invites
  has_many :code_challenges, through: :assessments_code_challenges

  validates :name, presence: true

  
end
