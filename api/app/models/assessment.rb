
class Assessment < ApplicationRecord
  has_many :interviewees
  belongs_to :recruiter
  has_and_belongs_to_many :questions
  has_many :invites 
  has_many :code_challenges

  validates :name, presence: true

  def total_grades
    questions.sum(:grades)
  end
end
