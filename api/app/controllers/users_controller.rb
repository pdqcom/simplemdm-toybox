class UsersController < ApplicationController

  def index
    @users = account.users.order(email: :asc)
  end

  def current
    user.make_current
    head 200
  end

  private

    def user
      account.users.find(params[:id])
    end
end
