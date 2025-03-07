// Create web server
var express = require('express');
var app = express();

// Create a route for the root URL
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Create a route for the /comments URL
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

// Start the server
var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});