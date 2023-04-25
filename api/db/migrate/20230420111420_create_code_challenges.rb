class CreateCodeChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :code_challenges do |t|
      t.string :name
      t.string :languages
      t.string :description 
      t.integer :totalAttempts 
      t.integer :totalCompleted

      t.timestamps
    end
  end
end
