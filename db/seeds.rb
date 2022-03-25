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

#project seed data
 
# mentee seed data
mentee1 = Mentee.create(first_name: 'Alex', last_name: "Dantonio", email_address: "alex@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");
    
mentee2 = Mentee.create(first_name: 'Justin', last_name: "Juco", email_address: "justin@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");

mentee3 = Mentee.create(first_name: 'Saloni', last_name: "Gupta", email_address: "saloni@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");

mentee4 = Mentee.create(first_name: 'Neelesh', last_name: "Bollu", email_address: "neelesh@yahoo.com", password_digest: "123",
    github_link: "null", linkedin_link: "null", skills: "null", hearts: "0");

    

