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
    return 0 if features_completed.length == 0
    features_completed.length.to_f / features.length
  end

  def features_completed
    features_completed = []
    features.each do |feature|
      if feature.done
        features_completed << feature
      end
    end
    features_completed
  end

  private

  def set_current
    self.current = true if user.apps.pluck(:current).exclude?(true)
  end
end
