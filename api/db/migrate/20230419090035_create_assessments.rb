class CreateAssessments < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments do |t|
      t.belongs_to :recruiter, null: false, foreign_key: true
      t.string :name
      t.boolean :accepted, default: false
      t.datetime :duedate
      t.boolean :reviewed, default: false
      
      t.timestamps
    end
  end
end
