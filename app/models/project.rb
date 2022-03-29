class Project < ApplicationRecord
    has_many :mentor_projects
    has_many :mentee_projects
   
    has_many :mentors, through: :mentor_projects
    has_many :mentees, through: :mentee_projects
end
