class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :question_id, :answer1, :answer2, :answer3, :answer4
end
