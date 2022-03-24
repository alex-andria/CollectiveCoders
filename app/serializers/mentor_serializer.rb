class MentorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_nameusername, :email_address, :password_digest, :github_link, :linkedin_link, :skills, :hearts
end
