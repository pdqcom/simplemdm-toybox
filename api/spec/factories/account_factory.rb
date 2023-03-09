FactoryBot.define do
  factory :account do
    sequence(:name) { |n| "Account #{n}" }

    factory :company_account do
      name { "Company" }
    end
  end
end