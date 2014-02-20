json.app do |json|
  json.id               @app.id
  json.title            @app.title
  json.summary          @app.summary
  json.links do |json|
    json.prod_title     "Production-link"
    json.prod_link      @app.url
    json.github_title   "GitHub"
    json.github_link    @app.repo
    json.stoies_title   "Stories"
    json.stoies_link    @app.stories
  end
  json.user do |json|
    json.id             @app.user.id
    json.name           @app.user.name
  end
end
