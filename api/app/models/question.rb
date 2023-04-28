class Question < ApplicationRecord
    belongs_to :recruiter
    has_many :responses
    has_many :assessments_questions
    has_many :assessments, through: :assessments_questions
    validates :content, presence: true

    def total_grades
        resonses.sum(:grades)
      end
end
