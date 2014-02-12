AppChallenge::Application.routes.draw do

  root to: 'users#new'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signout' => 'sessions#destroy', :as => :signout

  namespace :api, defaults: {format: :json} do
    namespace :apps do
      get "/current", action: 'current'
    end
  end
end
