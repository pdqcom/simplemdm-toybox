class ProfilesController < ApplicationController

  def index
    if params[:device_id].present?
      @device   = account.devices.find(params[:device_id])
      @profiles = @device.profiles
    else
      @profiles = account.profiles.order(name: :asc)
    end
  end
end
