class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.text :content
      t.string :feedback
      t.integer :grades
      t.integer :code_challenge_id
      t.integer :assessment_id
      t.integer :interviewee_id
      t.boolean :done
      

      t.timestamps
    end
  end
end
