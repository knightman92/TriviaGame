class Game < ApplicationRecord
	attr_accessible :is_multiplayer, :is_singleplayer, :player_one, :player_two
end
