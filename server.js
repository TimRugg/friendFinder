// NPM packages: express, body-parser, path
const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

// express needs: require, app, a port, and a listen
// app and port
var app = express();
var PORT = process.env.PORT || 3000; // first port for heroku 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use the functions from the routing files
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app); 

// listen
app.listen(PORT, function () {
  console.log('Listening on PORT: ' + PORT);
});