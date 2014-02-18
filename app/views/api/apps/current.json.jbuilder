json.array! @apps do |app|
  json.id                      app.id
  json.title                   app.title
  json.developer               app.user.name
  json.num_features            app.features.length
  json.num_features_completed  app.features_completed.length
  json.percentage_complete     app.percentage_complete
end
