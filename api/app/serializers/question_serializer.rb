class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :content,:correct_answer, :answer_1,:answer_2,:answer_3,:answer_4,:correct_answer, :totalAttempts
  has_many :responses
end
