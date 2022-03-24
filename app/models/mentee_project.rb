class MenteeProject < ApplicationRecord
  belongs_to :mentee
  belongs_to :project
end
