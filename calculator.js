//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res) {

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmiCalc = weight / ((height * height) / 10000);
  var bmiString = String(bmiCalc);
  var bmiFinal = bmiString.slice(0, 4);

  res.send('Your BMI is ' + bmiFinal);
});

app.listen(3000);
