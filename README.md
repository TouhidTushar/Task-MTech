# Full Stack Engineer Task - MTech

This project is deployed on [heroku](https://mtech-task.herokuapp.com).
Free dyno might take some time to load, please consider performance issue.

## Installing Guide For Running On Local Machine

cd into project's server directory and run the following commands:

### `npm install`

### `nodemon server`

Runs the project in the development mode.\
Server will server the static frontend files.\
Open [http://localhost:2000](http://localhost:2000) to view it in the browser.

Alternatively, you can also run the server and the client side on separate ports\
To do that...

cd into project's server directory and run:

### `npm install`

### `nodemon server`

cd into project's client directory and run:

### `npm install`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Setup Guide For MySQL database On Local Machine

You have to use the SQL script 'mtechtasklocal.sql' provided in the projects root directory to create a local instance of the database.\

After creating the database successfully, you have to configure the 'database.js' file in the following directory:\
'server > src > database.js'\

You will find necessary configuration instructions in the 'database.js' file

### Thank You
