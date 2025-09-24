json.data do
  json.array! @profiles, partial: '/profiles/profile', as: :profile
end