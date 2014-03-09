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
    app = App.new(app_params)
    app.features.build params[:features]

    if app.save
      render json: app
    else
      render json: {type: 'error', messages: app.errors.messages}, status: :unprocessable_entity
    end
  end

  def update
    # Ensure current user is creator of app
    unless current_user.id == params[:user][:id]
      render json: {type: 'error', messages: 'Unauthorized PUT attempt asshole!'}, status: :unprocessable_entity
      return
    end

    app = App.find(params[:app][:id])

    app.update_attributes(app_params)

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
