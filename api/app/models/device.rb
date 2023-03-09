class Device < ApplicationRecord
  belongs_to :account
  has_many :profiles
end
