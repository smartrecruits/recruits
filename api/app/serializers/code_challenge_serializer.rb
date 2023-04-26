class CodeChallengeSerializer < ActiveModel::Serializer
  attributes :id, :name, :languages, :description, :totalAttempts, :totalCompleted
  # has_many :assessments
  has_many :answers
end
