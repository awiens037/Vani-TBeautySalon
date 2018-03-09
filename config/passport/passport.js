//  bcrypt
var bCrypt = require('bcrypt-nodejs');



module.exports = function (passport, user, appointments) {


    var User = user;

    var Appointments = appointments;

    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(

        {

            usernameField: 'email',

            passwordField: 'password',
            // allows us to pass back the entire request to the callback
            passReqToCallback: true
        },

        function (req, email, password, done) {

            var generateHash = function (password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };


            // this uses emails to check if the user already exist
            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                if (user)

                {

                    return done(null, false, {
                        message: 'That email is already taken'
                    });

                } else

                {

                    var userPassword = generateHash(password);
                    // what is inputted in the database
                    var data =

                        {
                            email: email,

                            password: userPassword,

                            firstname: req.body.firstname,

                            lastname: req.body.lastname

                        };
                    // adds new entries to the database
                    User.create(data).then(function (newUser, created) {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {

                            return done(null, newUser);

                        }

                    });

                }

            });

        }

    ));


    //serialize
    passport.serializeUser(function (user, done) {

        done(null, user.id);

    });
    // deserialize user 
    passport.deserializeUser(function (id, done) {

        User.findById(id).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

        {

            // Local strategy uses email for username as well as password

            usernameField: 'email',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, email, password, done) {

            var User = user;

            var isValidPassword = function (userpass, password) {

                return bCrypt.compareSync(password, userpass);

            }
            // checks email if it is correct with password
            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                if (!user) {

                    return done(null, false, {
                        message: 'Email does not exist'
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

    ));

}