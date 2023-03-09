class Account < ApplicationRecord
  has_many :users
  has_many :devices
  has_many :profiles
end
