require 'rails_helper'

RSpec.describe "DeviceProfileAssignmentsControllers", type: :request do
  let(:account) { create :company_account }
  let(:device) { create :device, account: account }
  let(:profile) { create :profile, account: account }

  describe "create" do
    before(:each) do
      post device_profile_assignments_url(device, profile)
    end

    it "should return a success response" do
      assert_response :success
    end

    it "should create an assignment" do
      assert device.profiles.include?(profile)
    end
  end

  describe "destroy" do

    before(:each) do
      device.profiles << profile
      delete device_profile_assignments_url(device, profile)
      device.reload
    end

    it "should return a success response" do
      assert_response :success
    end

    it "should remove the profile" do
      assert_empty device.profiles
    end

    it "should keep the profile" do
      assert Profile.where(id: profile.id).exists?
    end

  end

end
