class AddLastNameToMentees < ActiveRecord::Migration[6.1]
  def change
    add_column :mentees, :last_name, :string
  end
end
