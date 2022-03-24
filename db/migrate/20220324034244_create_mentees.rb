class CreateMentees < ActiveRecord::Migration[6.1]
  def change
    create_table :mentees do |t|
      t.string :first_name
      t.string :last_nameusername
      t.string :email_address
      t.string :password_digest
      t.string :github_link
      t.string :linkedin_link
      t.string :skills
      t.integer :hearts

      t.timestamps
    end
  end
end
