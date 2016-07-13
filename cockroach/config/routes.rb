Rails.application.routes.draw do

  get   'profile' => 'profile#show'
  patch 'profile' => 'profile#update'

  devise_for :users, controllers: {
    sessions: 'sessions', 
    registrations: 'registrations'
  }

  root 'articles#index'
  
  resources :articles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
