class CreateInterviewees < ActiveRecord::Migration[7.0]
  def change
    create_table :interviewees do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.integer :grades

      t.timestamps
    end
  end
end
