class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.integer "game_id"
      t.text "question"
      t.text "answers" # 2 to 4 answers
      t.text "correct_answer"
      t.string "difficulty" #easy, medium, hard
      t.timestamps
    end
    add_index("questions", "game_id")
  end
end
