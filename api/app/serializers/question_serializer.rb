class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :content, :question, :feedback, :assessment_id, :created_at, :updated_at
end
