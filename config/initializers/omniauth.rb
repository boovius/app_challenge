Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, APPCONFIG[:github][:client_id], APPCONFIG[:github][:secret], scope: 'user,public_repo';
end
