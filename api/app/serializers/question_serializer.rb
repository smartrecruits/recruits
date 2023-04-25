class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :content,:correct_answer, :answer_1,:answer_2,:answer_3,:answer_4,:correct_answer, :totalAttempts,:created_at, :updated_at
  has_one :recruiter
  has_many :assessments
  has_many :responses
end
