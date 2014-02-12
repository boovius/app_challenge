class CreateFeatures < ActiveRecord::Migration
  def change
    create_table :features do |t|
      t.string :title
      t.integer :points
      t.boolean :done

      t.timestamps
    end
  end
end
