var authController = require('../controllers/authcontroller.js');
// var appController = require('../controllers/appcontroller.js');


module.exports = function (app, passport) {

    // app.get('/appointment', router.appointment);

    // app.post('/appointment', passport.authenticate('local-appointment', {
    //     successRedirect: '/signin',

    //     failureRedirect: '/appointment'

    // }));


    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',

            failureRedirect: '/signup'

            // failureFlash: "Wrong"
        }

    ));


    app.get('/dashboard', isLoggedIn, authController.dashboard);



    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',

            failureRedirect: '/signin'

        }

    ));

    // protects /dashboard route unless sign in
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

}