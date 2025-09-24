json.partial! '/profiles/profile', profile: profile
json.assigned device.profiles.include?(profile)