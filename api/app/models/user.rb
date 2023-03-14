class User < ApplicationRecord
  belongs_to :account
  scope :current, -> { where(current: true) }
  validates :current, uniqueness: true, if: :current

  def make_current
    self.class.transaction do
      account.users.where.not(id: self.id).update_all(current: false)
      update!(current: true)
    end
  end
end
