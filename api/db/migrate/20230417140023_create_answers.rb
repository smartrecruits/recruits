class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.text :content
      t.integer :question_id
      t.integer :assessment_id
      t.integer :interviewee_id
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
