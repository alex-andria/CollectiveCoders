class Project < ApplicationRecord
    has_many :mentor_projects, dependent: :destroy
    has_many :mentee_projects, dependent: :destroy
   
    has_many :mentors, through: :mentor_projects
    has_many :mentees, through: :mentee_projects

    validates :title, presence: true
    validates :description, presence: true
    validates :skills, presence: true
end
