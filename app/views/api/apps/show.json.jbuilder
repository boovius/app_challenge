json.app do |app|
  app.id               @app.id
  app.title            @app.title
  app.summary          @app.summary
  json.user do |user|
    user.id             @app.user.id
    user.name           @app.user.name
  end
  json.links  @links do |link|
    json.title         link[:title]
    json.href          link[:href]
  end
  json.features @app.features do |feature|
    json.title       feature.title
    json.points      feature.points
    json.done        feature.done
  end
end
