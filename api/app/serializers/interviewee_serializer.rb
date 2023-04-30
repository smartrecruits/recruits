class IntervieweeSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :firstname, :lastname, :bio
  has_many :invites 
  has_many :assessments
  has_many :code_challenges
  has_many :responses
  has_many :questions 
  has_many :answers
end
