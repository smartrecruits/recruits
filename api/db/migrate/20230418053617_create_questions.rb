class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.text :content 
      t.string :answer_1
      t.string :answer_2
      t.string :answer_3
      t.string :answer_4
      t.string :correct_answer
      t.integer :totalAttempts, dafault: 0
      t.integer :recruiter_id

      t.timestamps
    end
  end
end
