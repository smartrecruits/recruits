class AnswerSerializer < ActiveModel::Serializer
  attributes :id,:interviewee_id,:grades, :content, :feedback, :assessment_id, :created_at, :updated_at
  belongs_to :code_challenge
 
end
