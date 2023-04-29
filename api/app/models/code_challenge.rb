require_relative './concerns/codewars_module'

class CodeChallenge < ApplicationRecord
  extend CodewarsModule 
  has_many :assessments_code_challenges
  has_many :assessments, through: :assessments_code_challenges
  has_many :answers

  def create_from_module(id)
    challenge = one_code(id)
    puts " code is #{challenge}"
    code_challenge = CodeChallenge.find_by(codewars_id: challenge['id'])
    return code_challenge if code_challenge.present?

    code_challenge = CodeChallenge.create!(
      name: challenge['name'],
      description: challenge['description'],
      languages: challenge['languages'].join(','),
      totalAttempts: challenge['totalAttempts'],
      totalCompleted: challenge['totalCompleted'],
      codewars_id: challenge['id']
      
    )
  end
end
