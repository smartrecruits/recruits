class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :chosen_answer, :correct
  has_one :question
  has_one :interviewee
end
