class RecruiterSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :firstname, :lastname, :company
end
