require_relative './concerns/codewars_module'

class Assessment < ApplicationRecord
  extend Codewars
  belongs_to :interviewee
  belongs_to :recruiter
  has_many :questions
  has_many :invites 
end
