class Mentor < ApplicationRecord
    has_secure_password
    
    has_many :mentor_projects 
    has_many :projects, through: :mentor_projects

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email_address, presence: true, uniqueness: true
    validates :password, presence: true
end
