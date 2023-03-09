class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.references :account, null: false, foreign_key: true
      t.timestamps
      t.index [:account_id, :name], unique: true
    end
  end
end
