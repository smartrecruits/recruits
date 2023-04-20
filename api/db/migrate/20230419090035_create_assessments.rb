class CreateAssessments < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments do |t|
      t.belongs_to :interviewee, null: false, foreign_key: true
      t.belongs_to :recruiter, null: false, foreign_key: true
      t.string :name
      t.boolean :accepted, default: false
      t.datetime :duedate

      t.timestamps
    end
  end
end
