class CreateResponses < ActiveRecord::Migration[7.0]
  def change
    create_table :responses do |t|
      t.belongs_to :question, null: false, foreign_key: true
      t.belongs_to :interviewee, null: false, foreign_key: true
      t.string :chosen_answer
      t.string :feedback
      t.boolean :correct

      t.timestamps
    end
  end
end
