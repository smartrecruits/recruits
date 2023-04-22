
class Assessment < ApplicationRecord
  belongs_to :recruiter
  has_and_belongs_to_many :questions
  has_many :invites 
  has_many :interviewees, through: :invites
  has_many :code_challenges

  validates :name, presence: true

  
end
