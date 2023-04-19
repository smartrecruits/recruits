class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :accepted, :duedate
  has_one :interviewee
  has_one :recruiter
end
