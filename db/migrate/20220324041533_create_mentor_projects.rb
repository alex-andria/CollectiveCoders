class CreateMentorProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :mentor_projects do |t|
      t.belongs_to :mentor, null: false, foreign_key: true
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
