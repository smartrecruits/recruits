class Answer < ApplicationRecord
    belongs_to :code_challenge 
    belongs_to :interviewee

    validates :content, presence: true
end
