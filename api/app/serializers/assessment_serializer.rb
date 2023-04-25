class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :accepted, :duedate, :done, :reviewed
  has_many :interviewees
  has_one :recruiter
  has_many :code_challenges
  has_many :questions

end
