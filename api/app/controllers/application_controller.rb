class ApplicationController < ActionController::API

  def account
    @account ||= Account.find_by(name: "Company")
  end
end
