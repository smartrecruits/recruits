class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :interviewee_id, :recruiter_id, :name, :accepted, :due_date
end
