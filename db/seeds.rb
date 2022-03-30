# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# mentor seed data
mentor1 = Mentor.create(first_name: 'Alex', last_name: "Dantonio", email_address: "alex@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");
    
mentor2 = Mentor.create(first_name: 'Justin', last_name: "Juco", email_address: "justin@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");

mentor3 = Mentor.create(first_name: 'Saloni', last_name: "Gupta", email_address: "saloni@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");

mentor4 = Mentor.create(first_name: 'Neelesh', last_name: "Bollu", email_address: "neelesh@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");

mentor5 = Mentor.create(first_name: 'Nidhi', last_name: "Nadig", email_address: "nidhi@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");

#project seed data
project1 = Project.create(title: "Weather App", description: "An application to relay the weather forecast for the week.", 
    skills:"null")

project2 = Project.create(title: "CatBook", description: "An social media app for cats. Owners can befriend other cat owners and
    organize play dates for their kitties.", skills:"null")

project3 = Project.create(title: "E-Commerce App", description: "An online store for books to be bidded on, traded, and sold.", 
    skills:"null")


# mentee seed data
mentee1 = Mentee.create(first_name: 'Mentee1', last_name: "Dantonio", email_address: "Mentee1@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");
    
mentee2 = Mentee.create(first_name: 'Mentee2', last_name: "Juco", email_address: "Mentee2@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");

mentee3 = Mentee.create(first_name: 'Mentee3', last_name: "Gupta", email_address: "Mentee3@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");

mentee4 = Mentee.create(first_name: 'Mentee4', last_name: "Bollu", email_address: "Mentee4@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");


# mentor project join
ex1 = MentorProject.create(mentor_id: mentor1.id, project_id: project1.id)
ex2 = MentorProject.create(mentor_id: mentor1.id, project_id: project2.id)

    

