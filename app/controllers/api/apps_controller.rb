class Api::AppsController < ApplicationController
  def current
    @apps = App.where(current: true)
  end

  def show
    @app = App.find(params[:id])
    @links = [
      {
        title: "GitHub",
        href: @app.repo
      },
      {
        title: "Production",
        href: @app.url
      },
      {
        title: "Stories",
        href: @app.stories
      }
    ]
  end

  def create
    ap params

    app = App.new(app_params)
    app.features.build params[:features]

    if app.save
      render json: app
    else
      render json: {type: 'error', messages: app.errors.messages}, status: :unprocessable_entity
    end
  end

  private

  def app_params
    params.require(:app).permit(:title, :repo, :summary, :url, :stories, :user_id, features_attributes: [:id, :title, :points])
  end
end
