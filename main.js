// Check to see that file is connected (will see Hello World printed in terminal)
console.log('Hello World');

//Define packages
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars')
const data = [];
const fs = require('fs');
const app = express();

//Define templates
app.engine('handlebars', handlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

//Reference HTML form (in home.handlebars file), request body and store into variable, push to data array//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//Define how page serves static files
app.use(express.static('public'));

//Define completed array
let doneItems = [];

//Render home.handlebars content to "home" page on (localhost:3000)
// Data references UL in home.handlebars file
app.get('/', function(req, res) {
  res.render('home', {
    data: data,
    complete: doneItems
  })
  console.log(data);
});

app.post('/', function(req, res) {
  let thing_to_do = req.body.task;
  data.push(thing_to_do);
  res.redirect('/');
});

app.get('/complete/:index', function(req, res) {
  let thingsDone = data.splice(req.params.index, 1);
  doneItems.push(thingsDone)
  console.log(doneItems)
  res.redirect('/')
});

// Listen on port 3000. Will print in terminal when you type node main.js
app.listen(3000, function() {
  console.log('The program has started successfully!');
})
