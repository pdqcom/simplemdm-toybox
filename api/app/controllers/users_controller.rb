class UsersController < ApplicationController

  def index
    @users = account.users.order(email: :asc)
  end

  def current
    User.transaction do
      account.users.update_all(current: false)
      user.current = true
      user.save!
    end
  end

  private

    def user
      account.users.find(params[:id])
    end
end
