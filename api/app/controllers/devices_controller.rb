class DevicesController < ApplicationController

  def index
    @devices = account.devices.order("model asc, serial_number asc")
  end

  def show
    @device = account.devices.find(params[:id])
  end

end
