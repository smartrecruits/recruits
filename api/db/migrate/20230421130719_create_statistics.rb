class CreateStatistics < ActiveRecord::Migration[7.0]
  def change
    create_table :statistics do |t|
      t.integer :total_questions
      t.integer :total_interviewees
      t.integer :total_responses
      t.integer :correct_responses
      t.float :average_score
      t.integer :highest_score
      t.integer :lowest_score

      t.timestamps
    end
  end
end
