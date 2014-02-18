class App < ActiveRecord::Base

  attr_accessible \
    :title,
    :summary,
    :repo,
    :url,
    :stories,
    :current,
    :user,
    :user_id

  has_many   :features
  belongs_to :user

  validates_presence_of :user_id, :title

  before_save :set_current

  def percentage_complete
    features.length / features_completed.length
  end

  def features_completed
    features_completed = []
    features.each do |feature|
      if feature.done
        features_completed << feature
      end
    end
  end

  private

  def set_current
    self.current = true if user.apps.pluck(:current).exclude?(true)
  end
end
