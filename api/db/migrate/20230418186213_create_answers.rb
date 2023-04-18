class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.belongs_to :question, null: false, foreign_key: true
      t.string :answer1
      t.string :answer2
      t.string :answer3
      t.string :answer4

      t.timestamps
    end
  end
end
