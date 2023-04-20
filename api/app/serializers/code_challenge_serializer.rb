class CodeChallengeSerializer < ActiveModel::Serializer
  attributes :id
  has_one :assessment
end
