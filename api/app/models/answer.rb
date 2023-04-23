class Answer < ApplicationRecord
    # belongs_to :question 
    belongs_to :assessment
    belongs_to :interviewee

    validates :content, presence: true
end
