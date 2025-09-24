FactoryBot.define do
  factory :device do
    account
    sequence(:serial_number) { |n| "serial_#{n}" }
  end
end