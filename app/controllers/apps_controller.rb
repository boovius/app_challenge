class AppsController < ApplicationController
  def current
    @apps = App.where(current: true)
  end
end
