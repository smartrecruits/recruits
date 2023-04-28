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
      t.integer :total_code_challenges
      t.integer :answers_average
      t.integer :num_interviewees
      t.integer :num_attempts
      t.integer :num_incorrect
      t.integer :num_correct
      t.integer :num_completed
      t.string :code_challenge
      t.string :question
      t.float  :avg_grade
      t.float :pct_completed
      t.float :pct_correct
      t.integer :code_challenge_stats
      t.integer :question_stats

      t.timestamps
    end
  end
end
