require_relative './concerns/codewars_module'

class CodeChallenge < ApplicationRecord
  extend CodewarsModule 
  has_many :assessments_code_challenges
  has_many :assessments, through: :assessments_code_challenges
  has_many :answers
end
