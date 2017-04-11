class CreateGames < ActiveRecord::Migration[5.0]
  def up
    create_table :games do |t|
      t.integer "gameID"
      t.boolean "isMultiplayer"
      t.boolean "isSinglePlayer"
      t.boolean "playerOne"
      t.boolean "playerTwo"
      t.string "currentQuestion"
      t.string "currentAnswerChoices"
      t.string "currentCorrectAnswer"
      t.string "selectedAnswer"
      t.timestamps
    end
  end

  def down
    drop_table :games
  end
end
