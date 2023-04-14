class IntervieweeSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :grades
end
