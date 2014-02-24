AppChallenge::Application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :apps do
      get "/current", action: 'current'
      get "/:id",     action: 'show'
    end
  end

  get '/new' => 'users#new', :as => :signin
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signout' => 'sessions#destroy', :as => :signout

  # Passthrough to frontend
  match '*path' => 'ng_view#index', via: [:get, :post]

  root to: 'ng_view#index'
end
