class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :content, :question_id, :assessment_id, :answer1, :answer2, :answer3, :answer4:created_at, :updated_at 
end
