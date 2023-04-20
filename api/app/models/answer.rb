class Answer < ApplicationRecord
<<<<<<< HEAD
    belongs_to :question 
    #belongs_to :assessment
    has_many :interviewees
=======
    # belongs_to :question 
    belongs_to :assessment
    belongs_to :interviewee
>>>>>>> b7bace1d1de336f7bf0d66afb61215e18e7f98e4

    validates :content, presence: true
    validates :answers, presence: true
end
