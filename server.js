const express = require('express');
const passport   = require('passport')
const session    = require('express-session')
const bodyParser = require('body-parser')
const env = require('dotenv').load()
const exphbs = require('express-handlebars')

var app = express();
var PORT = process.env.PORT || 8080;

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport
 
app.use(session({ secret: 'vani-t salon',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// // override with the X-HTTP-Method-Override header in the request
// app.use(methodOverride('X-HTTP-Method-Override'));

// // package for helmet (https)
// app.use(helmet())

// Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
 
    res.send('Vani-T Homepage');
 
});

//Models
const db = require("./models");

//Routes
const authRoute = require('./routes/auth.js')(app, passport);
const saloncontroller = require('./controllers/salon_controller.js')(app);


//load passport strategies
require('./config/passport/passport.js')(passport, db.user); 
 


//Sync Database
db.sequelize.sync().then(function() {

    app.listen(PORT, function(err) {
 
        if (!err)
            console.log("Site is working");
        else console.log(err)
     
    });
 
    console.log('Database is working')
 
}).catch(function(err) {
 
    console.log(err, "Database error")
 
});