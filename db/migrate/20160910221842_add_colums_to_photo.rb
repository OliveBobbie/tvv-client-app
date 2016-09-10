class AddColumsToPhoto < ActiveRecord::Migration
  def change
    add_column :photos, :title, :string
    add_column :photos, :date, :string
  end
end
