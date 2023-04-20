class CreateCodeChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :code_challenges do |t|
      t.belongs_to :assessment, null: false, foreign_key: true
      t.integer :grades
      t.string :feedback
      t.string :text

      t.timestamps
    end
  end
end
