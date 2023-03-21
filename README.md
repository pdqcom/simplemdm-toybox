## SimplerMDM

SimplerMDM is a toy project consisting of a Ruby on Rails backend and a NextJS frontend.
There are several helper scripts included in the `bin` directory. Each one has their own help. To view the help
run `./bin/$command -h`

In order to setup SimplerMDM for the first time, run:
```
./bin/setup
```

To start the servers run:
```
./bin/start
```
Once everything is up and running, you should be able to visit the project by going to 
```
http://localhost
```

## Documentation
https://guides.rubyonrails.org/

https://mui.com/material-ui/getting-started/overview/

https://nextjs.org/docs/getting-started


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