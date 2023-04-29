class InviteSerializer < ActiveModel::Serializer
  attributes :id, :status
  belongs_to :interviewee
  belongs_to :recruiter
  belongs_to :assessment
end
