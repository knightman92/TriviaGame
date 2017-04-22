class Question < ApplicationRecord
	attr_accessible :game_id, :question, :answers, :correct_answer, :difficulty
end
