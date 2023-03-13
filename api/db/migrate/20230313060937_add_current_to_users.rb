class AddCurrentToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :current, :boolean, allow_null: false, default: false
  end
end
