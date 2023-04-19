class CreateInvites < ActiveRecord::Migration[7.0]
  def change
    create_table :invites do |t|
      t.belongs_to :interviewee, null: false, foreign_key: true
      t.belongs_to :recruiter, null: false, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
