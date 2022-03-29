class Mentee < ApplicationRecord
    has_secure_password
    
    has_many :mentee_projects
    has_many :projects, through: :mentee_projects
end
