class RemoveLastNameusernameFromMentors < ActiveRecord::Migration[6.1]
  def change
    remove_column :mentors, :last_nameusername, :string
    remove_column :mentees, :last_nameusername, :string
  end
end
