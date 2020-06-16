# README

### Rails

1. clone the repo and give new name. `git clonse SSH <ProjectName>`
      `git remote rm origin` and create new repo and add new origin `git add remote origin <url>`
2. Run `bundle`
3. Go to database.yml and `CMD F` to find all old names of database and replace with new name. Run `rails db:create db:migrate`
4. To start rails server, `rails s -p 3001` check this route `http://localhost:3001/api/products` should see products

### React

1. `cd <projectname/client>`
2. `yarn` to install all pacakages
3. run `yarn start` to start server
4. open `http://localhost3000` make sure rails is on port 3001
