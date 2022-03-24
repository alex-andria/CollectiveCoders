class MenteeProjectSerializer < ActiveModel::Serializer
  attributes :id
  has_one :mentee
  has_one :project
end
