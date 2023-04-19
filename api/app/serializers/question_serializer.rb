class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :feedback, :assessment_id, :answer1, :answer2, :answer3, :created_at, :updated_at
  #has_many :answers
end
