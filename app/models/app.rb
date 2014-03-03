class App < ActiveRecord::Base

  has_many   :features
  belongs_to :user

  accepts_nested_attributes_for :features

  validates_uniqueness_of :title, :repo
  validates_presence_of :user_id

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
    self.current = user.apps.pluck(:current).exclude?(true) ? true : false

    true
  end
end
