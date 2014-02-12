class AppsController < ApplicationController
  def current
    @apps = App.where(current: true)
  end

  def create
    app = App.create(app_params)
  end

  private

  def app_params
    params.require(:app).permit(:title, :summary, :repo, :url, :stories, :user_id)
  end
end
