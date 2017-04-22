class User < ActiveRecord::Base
	attr_accessor :username, :password, :password_confirmation
	validates :username, :presences => :length => { :in => 1..40 }
	validates :password, :confirmation => true
	validates_length_of :password, :in => 1..20, :on => :create

	before_save :encrypt_password
	after_save :clear_password
	def encrypt_password
		if password.present?
			self.salt = BCrypt::Engine.generate_salt
			self.encrypt_password= BCrypt::Engine.hash_secret(password, salt)
		end
	end
	def clear_password
		self.password = nil
	end
end
