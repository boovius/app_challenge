json.array! @apps do |app|
  json.id                  app.id
  json.title               app.title
  json.developer           app.user.name
end
