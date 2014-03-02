class Feature < ActiveRecord::Base

  belongs_to :app

  before_save :set_initial_done_state

  private

  def set_initial_done_state
    self.done = false unless self.done == true

    # to prevent DB rollback
    true
  end
end
