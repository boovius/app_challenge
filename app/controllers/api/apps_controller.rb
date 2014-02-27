class Api::AppsController < ApplicationController
  def current
    @apps = App.where(current: true)
  end

  def show
    @app = App.find(params[:id])
  end

  def create
    ap params

    app = App.create!(app_params)

    binding.pry

    render json: app
  end

  private

  def app_params
    params.require(:app).permit(:title, :repo)
  end
end
