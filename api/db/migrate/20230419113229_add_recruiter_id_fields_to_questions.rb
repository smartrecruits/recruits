class AddRecruiterIdFieldsToQuestions < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :recruiter_id, :integer
  end
end
