class UsersController < ApplicationController

  def index
    @users = account.users.order(email: :asc)
  end
  
end
