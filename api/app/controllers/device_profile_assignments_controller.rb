class DeviceProfileAssignmentsController < ApplicationController

  def index
    profiles
    device.profiles.load
  end
  def create
    device.profiles << profile unless device.profiles.include?(profile)
    render 'show'
  end

  def destroy
    device.profiles.delete(profile)
    render 'show'
  end

  private

    def device
      @device ||= account.devices.find(params[:device_id])
    end

    def profiles
      @profiles ||= account.profiles
    end
    def profile
      @profile ||= account.profiles.find(params[:profile_id])
    end
end
