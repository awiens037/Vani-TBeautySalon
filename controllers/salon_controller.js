var db = require("../models");

// Routes =============================================================
module.exports = function (app) {
    
    app.get("/dashboard", function (req, res) {
        //call the model method that gets all the appointments
        console.log('dashboard endpoint')
        db.appointments.findAll({}).then(function (data) {
            // if (err) {
            //     return res.status(501).end();
            // }
            console.log('query works')
            console.log(data);
            
            res.render('dashboard', {appointments: data});
            
        //    res.json(data);
            
            })
        });
        // {appointments: data}
    
    // });

    // Create a new appointment
    app.post("/appointments", function (req, res) {
        // create takes an argument of an object describing the item we want to insert
        // into our table. In this case we just we pass in an object with a text and
        // complete property
        db.appointments.create({
            services: req.body.services,
            date: req.body.date,
            time: req.body.time,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            stylist: req.body.stylist,

        }).then(function (data) {
            // if (err) {
            //     return res.status(502).end();
            // }
            res.json(
                data
            );
            console.log(data);
        })
    });
    // Update a burger
    // app.put("/appointments/:id", function (req, res) {
    //     db.appointments.update({
                //burger_name: req.body.burger_name,
            //     devoured: 1

            // }, {
            //     where: {
            //         id: req.params.id
            //     }
            // })
            // .then(function (data) {
            //     if (data.changedRows === 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                //     return res.status(404).end();
                // }

                // res.status(200).end();
                // res.json(data);
                //   });
                // burger.update(req.params.id, function (err, data) {

                //     if (err) {
                //         return res.status(500).end()
                //     }

                //     if (data.changedRows === 0) {
                //         // If no rows were changed, then the ID must not exist, so 404
                //         return res.status(404).end();
                //     }

                //     res.status(200).end();

            // })

    // });
};