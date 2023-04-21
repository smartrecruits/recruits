class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :content, :answers, :feedback, :assessment_id, :created_at, :updated_at
  has_many :answers
end
