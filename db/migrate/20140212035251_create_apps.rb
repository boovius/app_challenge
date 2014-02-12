class CreateApps < ActiveRecord::Migration
  def change
    create_table :apps do |t|
      t.string :title
      t.string :summary
      t.string :repo
      t.string :url
      t.string :stories

      t.timestamps
    end
  end
end
