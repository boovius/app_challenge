json.app do |app|
  app.id               @app.id
  app.title            @app.title
  app.summary          @app.summary
  json.links do |link|
    link.prod_title     "Production-link"
    link.prod_link      @app.url
    link.github_title   "GitHub"
    link.github_link    @app.repo
    link.stoies_title   "Stories"
    link.stoies_link    @app.stories
  end
  json.user do |user|
    user.id             @app.user.id
    user.name           @app.user.name
  end
  json.features @app.features do |feature|
    json.title       feature.title
    json.points      feature.points
    json.done        feature.done
  end
end
