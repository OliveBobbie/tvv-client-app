Rails.application.routes.draw do

  devise_for :users
  root 'photos#index'

  get '/users/:id' => 'users#show'

	get '/photos/new' => 'photos#new'
	post '/photos' => 'photos#create'
  get '/photos' => 'photos#index'
	get '/photos/:id' => 'photos#show'
end
