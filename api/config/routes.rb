Rails.application.routes.draw do

  resources :profiles, only: [:index]
  resources :users, only: [:index]
  resources :devices, only: [:index, :show] do
    resources :profiles do
      resources :assignments, only: [:create, :destroy], controller: :device_profile_assignments
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
