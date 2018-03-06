const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require('method-override');
const helmet = require('helmet')
const db = require('./models');
const dotenv = require('dotenv')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

 
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// package for helmet (https)
app.use(helmet())

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public'));

// Routes
// =============================================================
require("./controllers/salon_controller.js")(app);



// Starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
 });

 //CODE FOR JOI(VALIDATING USER INPUT) AND TWILIO SMS
 // =============================================================
//  var twilio = require('twilio');
 
// // Find your account sid and auth token in your Twilio account Console.
// var client = new twilio('ACc418b053ae8fbd32647a1e09d94a08c7', '19c6a3095461efcd67e465e0f9fe98c4');
 
// // Send the text message.
// client.messages.create({
//   to: '858-218-5730',
//   from: '1 442-245-5475 ',
//   body: `Your appointment has been confirmed for ${req.body.date} at ${req.body.time}`
// });

// const Joi = require('joi');
 
// const schema = Joi.object().keys({
//     username: Joi.string().alphanum().min(3).max(30).required(),
//     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
//     access_token: [Joi.string(), Joi.number()],
//     birthyear: Joi.number().integer().min(1900).max(2013),
//     email: Joi.string().email()
// }).with('username', 'birthyear').without('password', 'access_token')
 
// // Return result
// const result = Joi.validate({ 
//     username: 'abc', 
//     birthyear: 1994 
// }, schema)

// const express = require('express')
// const helmet = require('helmet')
// const app = express()
// app.use(helmet())