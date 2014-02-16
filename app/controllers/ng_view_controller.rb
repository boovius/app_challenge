class NgViewController < ApplicationController
  def index
    redirect_to signin unless current_user
  end
end
