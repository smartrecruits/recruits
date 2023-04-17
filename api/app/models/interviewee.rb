class Interviewee < ApplicationRecord
    has_secure_password
    has_many :assessments 

    # validates :email,{
    #     uniqueness: true,
    #     presence: true
    # }
    # validates :username,{
    #     length: {minimum:5},
    #     uniqueness: true,
    #     presence: true
    # }
end
