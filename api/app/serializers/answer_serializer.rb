class AnswerSerializer < ActiveModel::Serializer
  attributes :id,:grades, :content, :feedback, :assessment_id, :done
  belongs_to :code_challenge
  belongs_to :interviewee
 
end
