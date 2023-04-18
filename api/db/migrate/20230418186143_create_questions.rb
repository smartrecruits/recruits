class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.belongs_to :assessment, null: false, foreign_key: true
      t.string :question
      t.string :feedback
      t.string :answer

      t.timestamps
    end
  end
end
