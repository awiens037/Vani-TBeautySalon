var db = require("../models");
var exports = module.exports = {}

// exports.appointment = function (req, res) {
//     console.log('appt is working')
//     res.render('appointment')

//         // db.appointments.create({
//         //     services: req.body.services,
//         //     date: req.body.date,
//         //     time: req.body.time,
//         //     firstname: req.body.firstname,
//         //     lastname: req.body.lastname,
//         //     email: req.body.email,
//         //     phone: req.body.phonenumber,
//         //     stylist: req.body.stylist,

//         // }).then(function (data) {
//         //     // if (err) {
//         //     //     return res.status(502).end();
//         //     // }
//         //     res.json(
//         //         data
//         //     );
//         //     console.log(data);
//         // })
    
// }
// // exports.appointment("/appointment", function (req, res) {
//         // create takes an argument of an object describing the item we want to insert
//         // into our table. In this case we just we pass in an object with a text and
//         // complete property
//         console.log('this is working')
//         db.appointments.create({
//             services: req.body.services,
//             date: req.body.date,
//             time: req.body.time,
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             email: req.body.email,
//             phone: req.body.phone,
//             stylist: req.body.stylist,

//         }).then(function (data) {
//             // if (err) {
//             //     return res.status(502).end();
//             // }
//             res.json(
//                 data
//             );
//             console.log(data);
//         })
//     });


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

        //    res.json(data);

    })
    // res.render('dashboard');

}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/signin');

    });

}