# frozen_string_literal: true
require 'rails_helper'

describe 'User' do

  let(:account) { create :account }
  let!(:users)  { create_list :user, 2, account: account }

  describe "validations" do
    it "should allow one user to be current" do
      users[0].current = true
      assert users[0].valid?
      assert users[0].save
    end

    it "should not allow a second user to become current" do
      users[0].current = true
      users[0].save
      users[1].current = true
      refute users[1].valid?
      refute users[1].save
    end
  end


  describe "make_current" do
    before(:each) do
      users.first.current = true
      users.first.save

      users.last.make_current
      users.each(&:reload)
    end

    it "should make the user the current user" do
      assert users.last.current
    end

    it "should ensure the other user is not the current user " do
      refute users.first.current
    end
  end

end
