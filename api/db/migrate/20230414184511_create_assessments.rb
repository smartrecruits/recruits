class CreateAssessments < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments do |t|
      t.string :interviewee_id
      t.string :recruiter_id
      t.string :name
      t.boolean :accepted
      t.datetime :due_date

      t.timestamps
    end
  end
end
