class CreateCodeChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :code_challenges do |t|
      t.belongs_to :assessment, null: false, foreign_key: true
      t.string :name
      t.string :description 
      t.integer :totalAttempts 
      t.integer :totalCompleted

      t.timestamps
    end
  end
end
