class Recruiter < ApplicationRecord
    has_many :assessments
    has_many :interviewees, through: :assessments
end
