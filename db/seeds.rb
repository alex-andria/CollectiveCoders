# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    mentor1 = Mentor.create(first_name: 'Alex', l)


    create_table "mentors", force: :cascade do |t|
        t.string "first_name"
        t.string "last_nameusername"
        t.string "email_address"
        t.string "password_digest"
        t.string "github_link"
        t.string "linkedin_link"
        t.string "skills"
        t.integer "hearts"
        t.datetime "created_at", precision: 6, null: false
        t.datetime "updated_at", precision: 6, null: false
      end
