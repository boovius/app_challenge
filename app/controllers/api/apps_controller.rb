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
    app.user_id = params[:userId]

    if app.save
      render json: app
    else
      render json: {type: 'error', message: 'There was an error!'}, status: :unprocessable_entity
    end
  end

  private

  def app_params
    params.require(:app).permit(:title, :repo, :summary, :url, :stories)
  end
end
