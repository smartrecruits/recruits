class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :content, :question_id, :assessment_id, :interviewee_id, :created_at, :updated_at 
end
