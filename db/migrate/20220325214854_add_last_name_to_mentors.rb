class AddLastNameToMentors < ActiveRecord::Migration[6.1]
  def change
    add_column :mentors, :last_name, :string
  end
end
