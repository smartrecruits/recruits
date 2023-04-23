class IntervieweeSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :firstname, :lastname, :bio
end
