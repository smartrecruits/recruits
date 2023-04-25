class CreateAssessmentsQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments_questions do |t|
      t.belongs_to :question, null: false, foreign_key: true
      t.belongs_to :assessment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
