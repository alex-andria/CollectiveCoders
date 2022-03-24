class CreateMenteeProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :mentee_projects do |t|
      t.belongs_to :mentee, null: false, foreign_key: true
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
