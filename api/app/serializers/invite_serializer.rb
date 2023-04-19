class InviteSerializer < ActiveModel::Serializer
  attributes :id, :status
  has_one :interviewee
  has_one :recruiter
end
