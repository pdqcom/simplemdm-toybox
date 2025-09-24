class AddDeviceIdToProfiles < ActiveRecord::Migration[7.0]
  def change
    add_reference :profiles, :device, null: true , foreign_key: true
  end
end
