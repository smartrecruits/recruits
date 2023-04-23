require_relative './concerns/codewars_module'

class CodeChallenge < ApplicationRecord
  extend CodewarsModule
  belongs_to :assessment
  has_many :answers
end
