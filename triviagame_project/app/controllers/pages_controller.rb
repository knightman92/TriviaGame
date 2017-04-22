class PagesController < ApplicationController

  layout 'application'

  def index
    render('index')
  end

end
