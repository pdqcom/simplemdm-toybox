class UsersController < ApplicationController

  def index
    @users = account.users.order(email: :asc)
  end

  def current
    user.make_current
    render 'show'
  end

  private

    def user
      @user ||= account.users.find(params[:id])
    end
end
