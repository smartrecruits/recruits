class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :feedback
      t.integer :assessment_id
  

      t.timestamps
    end
  end
end
