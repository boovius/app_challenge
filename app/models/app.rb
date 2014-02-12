class App < ActiveRecord::Base

  has_many   :features
  belongs_to :user
end
