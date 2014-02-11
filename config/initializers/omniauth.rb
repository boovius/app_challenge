Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, '50d1cad7d4133c856cf9', '85fe02c5e7652ee1d05248db764ae569733bc39a', scope: 'user,public_repo';
end
