class MentorProjectSerializer < ActiveModel::Serializer
  attributes :id
  has_one :mentor
  has_one :project
end
