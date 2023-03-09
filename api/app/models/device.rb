class Device < ApplicationRecord
  belongs_to :account
  has_and_belongs_to_many :profiles
end
