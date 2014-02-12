class AddCurrentToApps < ActiveRecord::Migration
  def change
    add_column :apps, :current, :boolean
  end
end
