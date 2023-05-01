class Answer < ApplicationRecord
    belongs_to :code_challenge 
    belongs_to :interviewee
    belongs_to :assessment
    
    validates :content, presence: true
end
