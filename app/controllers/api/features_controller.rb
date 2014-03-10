class Api::FeaturesController < ApplicationController
  def update
    feature = Feature.find(params[:feature][:id])

    unless current_user.id == feature.app.user_id
      render json: {type: 'error', message: 'Unauthorized PUT attempt asshole!'}, status: :unprocessable_entity
      return
    end

    feature.update_attributes(feature_params)

    if feature.save
      render json: feature
    else
      render json: {type: 'error', message: feature.errors.messages}, status: :unprocessable_entity
    end
  end

  private

  def feature_params
    params.require(:feature).permit(:id, :title, :points, :done)
  end
end
