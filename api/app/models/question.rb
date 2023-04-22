class Question < ApplicationRecord
    belongs_to :recruiter
    has_many :responses
    has_and_belongs_to_many :assessment

    def total_grades
        resonses.sum(:grades)
      end
end
