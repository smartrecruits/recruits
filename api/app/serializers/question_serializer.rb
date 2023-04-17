class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :assessment_id, :question, :feedback, :answer
end
