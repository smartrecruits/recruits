class Answer < ApplicationRecord
    belongs_to :question 
    #belongs_to :assessment
    has_many :interviewees

    validates :content, presence: true
    validates :answers, presence: true
end
