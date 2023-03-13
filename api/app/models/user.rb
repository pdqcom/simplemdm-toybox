class User < ApplicationRecord
  belongs_to :account
  scope :current, -> { where(current: true) }
  validates :current, uniqueness: true, if: :current

end
