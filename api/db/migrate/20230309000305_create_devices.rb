class CreateDevices < ActiveRecord::Migration[7.0]
  def change
    create_table :devices do |t|
      t.string :serial_number, null: false, index: { unique: true }
      t.string :model
      t.references :account, null: false, foreign_key: true

      t.timestamps
    end
  end
end
