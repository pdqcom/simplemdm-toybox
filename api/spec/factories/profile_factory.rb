FactoryBot.define do
  factory :profile do
    account
    sequence(:name) { |n| "Profile #{n}" }
  end
end