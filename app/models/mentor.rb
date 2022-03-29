class Mentor < ApplicationRecord
    has_secure_password
    
    has_many :mentor_projects 
    has_many :projects, through: :mentor_projects
end
