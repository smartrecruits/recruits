class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :accepted, :duedate, :done, :reviewed, :quizdone, :codedone
  has_many :code_challenges
  has_many :questions
  has_many :invites
  has_many :interviewees
  has_many :responses 
  has_many :answers
  belongs_to :recruiter
end
