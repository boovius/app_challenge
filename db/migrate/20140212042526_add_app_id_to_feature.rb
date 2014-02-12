class AddAppIdToFeature < ActiveRecord::Migration
  def change
    add_column :features, :app_id, :integer
  end
end
