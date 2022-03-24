class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :skills
end
