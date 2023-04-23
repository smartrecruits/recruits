class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :feedback, :assessment_id, :created_at, :updated_at
end
