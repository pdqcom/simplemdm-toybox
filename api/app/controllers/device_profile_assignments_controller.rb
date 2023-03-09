class DeviceProfileAssignmentsController < ApplicationController
  def create
    device.profiles << profile
    head 200
  end

  def destroy
    device.profiles.delete(profile)
    head 200
  end

  private

    def device
      @device ||= account.devices.find(params[:device_id])
    end

    def profile
      @profile ||= account.profiles.find(params[:profile_id])
    end
end
