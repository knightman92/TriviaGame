class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.boolean "is_multiplayer"
      t.boolean "is_singleplayer"
      t.boolean "player_one"
      t.boolean "player_two"
      t.timestamps
    end
  end
end
