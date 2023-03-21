class ApplicationController < ActionController::API

  def account
    @account ||= Account.find_by(name: "Company")
  end

  def current_user
    account.users.find_by!(current: true)
  end

  def render_error(error_message, status)
    @error_message = error_message
    render '/error/show', status: status
  end

end
