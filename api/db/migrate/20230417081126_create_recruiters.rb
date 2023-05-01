class CreateRecruiters < ActiveRecord::Migration[7.0]
  def change
    create_table :recruiters do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :firstname
      t.string :lastname
      t.string :company
      t.string :image, default: "https://iglu.net/wp-content/uploads/2022/08/Game-Programmer-768x511.png"

      t.timestamps
    end
  end
end
