class ApplicationController < ActionController::API

  def account
    @account ||= Account.find_by(name: "Company")
  end

  def handle_errors
    @error_message = "There was an error processing your request"
    render '/error/show', status: 500
  end
end
