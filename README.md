## SimplerMDM

SimplerMDM is a toy project consisting of a Ruby on Rails backend and a NextJS front end.
There are several helper scripts included in the `bin` directory. Each one has their own help. To view the help
run `./bin/$command -h`

In order to setup SimplerMDM, first run 
```
./bin/build 
./bin/console -a rails db:setup
./bin/start
```
Once everything is up and running, you should be able to visit the project by going to 
```
http://localhost
```

## Notes 

Rails app was initialized using 
```bash
gem install rails
rails new api -d mysql --api
cd api 
bundle binstubs bundler
```

Frontend app was initialized using

```bash
yarn create next-app --typescript
```