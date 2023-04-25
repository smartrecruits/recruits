class AssessmentsQuestionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :question
  has_one :assessment
end
