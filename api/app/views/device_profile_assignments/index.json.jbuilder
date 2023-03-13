json.data do
  json.array! @profiles, partial: 'profile_assignment', as: :profile, locals: { device: @device }
end
