class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string "game_id"
      t.string "username"
      t.string "encrypted_password"
      t.string "salt"
      t.timestamps
    end
    add_index("users", "game_id")
  end
end