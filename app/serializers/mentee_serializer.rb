class MenteeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :email_address, :password_digest, :github_link, :linkedin_link, :skills, :hearts
end
