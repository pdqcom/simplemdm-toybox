# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "UsersController", type: :request do
  let(:account) { create :company_account }
  let(:users) { create_list :user, 2, account: account }


  describe "current" do

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
