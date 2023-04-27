class AssessmentsCodeChallengeSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :code_challenge
  belongs_to :assessment
end
