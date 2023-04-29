require 'net/http'
require_relative './concerns/codewars_module'

class AssessmentsCodeChallenge < ApplicationRecord
  belongs_to :code_challenge
  belongs_to :assessment

  def self.find_or_create_code_challenge(codewars_id)
    code_challenge = CodeChallenge.find_by(codewars_id: codewars_id)
  
    unless code_challenge
      # If the code challenge does not exist in the code_challenges table, create a new one
      challenge = CodeChallenge.one_code(codewars_id)
      puts "code #{challenge}"
      code_challenge = CodeChallenge.new(
        name: challenge['name'],
        description: challenge['description'],
        languages: challenge['languages'].join(','),
        totalAttempts: challenge['totalAttempts'],
        totalCompleted: challenge['totalCompleted'],
        codewars_id: challenge['id']
      )
      # Save the code challenge only in the assessments_code_challenges table
      code_challenge.save!(context: :assessments)
    end
  
    code_challenge
  end
end
