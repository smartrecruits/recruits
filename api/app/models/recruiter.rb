class Recruiter < ApplicationRecord
    has_secure_password
    has_many :assessments
    has_many :interviewees, through: :assessments
    has_many :invites
    #has_many :answers
 
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
