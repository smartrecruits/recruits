# require_relative './concerns/codewars'

class Assessment < ApplicationRecord
  include Codewars
  belongs_to :interviewee
  belongs_to :recruiter
  has_many :questions
  has_many :invites 
end
