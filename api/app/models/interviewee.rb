class Interviewee < ApplicationRecord
    has_secure_password
    has_many :invites 
    has_many :responses
    has_many :questions
    has_many :recruiters, through: :invites 
    has_many :assessments, through: :invites 
    has_many :answers
    has_many :code_challenges

    has_many :completed_assessments, -> { where(done: true) }, through: :invites, source: :assessment

    validates :email,{
        uniqueness: true,
        presence: true
    }
    validates :username,{
        length: {minimum:5},
        uniqueness: true,
        presence: true
    }
end
