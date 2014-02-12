AppChallenge::Application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :apps do
      get "/current", action: 'current'
    end
  end

  root to: 'users#new'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signout' => 'sessions#destroy', :as => :signout

end
