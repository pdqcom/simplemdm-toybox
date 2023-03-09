class Device < ApplicationRecord
  belongs_to :account
  has_many :devices
end
