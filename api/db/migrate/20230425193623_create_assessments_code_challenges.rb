class CreateAssessmentsCodeChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments_code_challenges do |t|
      t.belongs_to :code_challenge, null: false, foreign_key: true
      t.belongs_to :assessment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
