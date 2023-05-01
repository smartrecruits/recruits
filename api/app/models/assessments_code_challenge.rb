# require 'net/http'
require_relative './concerns/codewars_module'

class AssessmentsCodeChallenge < ApplicationRecord
  belongs_to :code_challenge
  belongs_to :assessment

end
