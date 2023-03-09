require "test_helper"

class DeviceProfileAssignmentsControllerTest < ActionDispatch::IntegrationTest

  def setup
    @account = create :account
    @device  = create :device, account: @account
    @profile = create :profile, account: @account
  end

  test "should create an assignment" do
    post device_profile_assignments_url(@device, @profile)
    assert_response :success
  end

end
