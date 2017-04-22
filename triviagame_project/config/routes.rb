Rails.application.routes.draw do
 
  root 'pages#index'

  # match ':controller(/:action(/:id))(.:format)'

  get 'users/new'
  get 'pages/index'
  get 'pages/enter'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
