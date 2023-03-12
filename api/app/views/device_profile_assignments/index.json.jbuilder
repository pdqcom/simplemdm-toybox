json.data do
  json.array! @profiles do |profile|
    json.partial! '/profiles/profile', profile: profile
    json.assigned @device.profiles.include?(profile)
  end
end
