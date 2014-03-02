class Api::AppsController < ApplicationController
  def current
    @apps = App.where(current: true)
  end

  def show
    @app = App.find(params[:id])
  end

  def create
    ap params

    app = App.new(app_params)

    if app.save
      render json: app
    else
      render json: {type: 'error', messages: app.errors.messages}, status: :unprocessable_entity
    end
  end

  private

  def app_params
    params.require(:app).permit(:title, :repo, :summary, :url, :stories, :user_id)
  end
end
