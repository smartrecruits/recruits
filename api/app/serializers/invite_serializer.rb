class InviteSerializer < ActiveModel::Serializer
  attributes :id, :status
  belongs_to :interviewee
  belongs_to :recruiter
end
