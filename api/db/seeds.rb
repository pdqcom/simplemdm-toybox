# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

company = Account.create_or_find_by! name: "Company"

models  = %w[iPhone iPad mac]
devices = %w[
SYNXBU52733466
TISZNN51122841
AOOGZD35250883
VATRVN63428785
NJIASM54713684
DOJOSQ03883430
RYTAZS34662256
PXNSGB86266524
YPKCAI56777757
YHVLBN23887148
SVTQWG32000884
MOBLAT74126544 ].map do |serial_number|
  device       = company.devices.create_or_find_by! serial_number: serial_number
  device.model = models.shuffle.first
  device.save!
  device
end

users = %w[admin@example.com employee@example.com support@example.com].map do |email|
  company.users.find_or_create_by! email: email
end

users.first.make_current

profiles = %w[Wifi VPN Restrictions].map do |profile_name|
  company.profiles.find_or_create_by! name: profile_name
end