var db = require("../models");
var exports = module.exports = {}


exports.signup = function (req, res) {
    console.log('signup is working')
    res.render('signup');
}

exports.signin = function (req, res) {
    res.render('signin');
}

exports.dashboard = function (req, res) {
    console.log('render dashboard')
    db.appointments.findAll({}).then(function (data) {
        // if (err) {
        //     return res.status(501).end();
        // }
        console.log('query works')
        console.log(data);

        res.render('dashboard', {
            appointments: data
        });
    })
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/signin');
    });
}