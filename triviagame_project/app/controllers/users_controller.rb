
class UsersController < ApplicationController
require 'digest/sha1'
  def new
  	@user = User.new
  end
  def create
  	@user = User.new(params[:user])
  	@salt = BCrypt::Engine.generate_salt
  	encrypted_password= BCrypt::Engine.hash_secret(@user.password, @salt)
  	if @user.save
  		flash[:notice] = "You signed up successfully"
  		flash[:color]= "valid"
  	else
  		flash[:notice] = "Form is invalid"
  		flash[:color]= "invalid"
  	end
  	render "new"
  end
end
