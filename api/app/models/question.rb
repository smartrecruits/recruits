class Question < ApplicationRecord
<<<<<<< HEAD
    belongs_to :recruiter
    has_many :responses
    has_and_belongs_to_many :assessment
=======
   belongs_to :recruiter
   has_many :answers

    validates :content, presence: true
>>>>>>> d5cab90122950c5f6c8e24951b2644b2a3b32c5f

    validates :question, presence: true

    def total_grades
        resonses.sum(:grades)
      end
end
