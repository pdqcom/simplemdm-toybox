class CreateDeviceJoinTable < ActiveRecord::Migration[7.0]
  def change
    create_join_table :devices, :profiles do |t|
      # t.index [:device_id, :profile_id]
      t.index [:profile_id, :device_id], unique: true
    end
  end
end
