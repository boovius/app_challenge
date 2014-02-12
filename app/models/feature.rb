class Feature < ActiveRecord::Base

  attr_accessible \
    :title,
    :points,
    :done,
    :app,
    :app_id

  belongs_to :app
end
