//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/bmicalculator', function(req, res) {

  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let bmiCalc = weight / ((height * height) / 10000);
  let bmiString = String(bmiCalc);
  let bmiFinal = bmiString.slice(0, 4);

  res.send(`Your BMI is ' + ${bmiFinal}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
