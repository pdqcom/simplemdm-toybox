Rails.application.routes.draw do

  resources :profiles, only: [:index]
  resources :users, only: [:index] do
    member do
      put 'current'
    end
  end
  resources :devices, only: [:index, :show] do
    resources :profiles do
      collection do
        get 'assignments' => 'device_profile_assignments#index'
      end
      resources :assignments, only: [:create], controller: :device_profile_assignments do
        collection do
          delete :destroy
        end
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
