var db = require("../models");

// Routes =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        //call the model method that gets all the burgers
        db.burgers.findAll({}).then(function (data) {
            // if (err) {
            //     return res.status(501).end();
            // }
            res.render("index", {
                Activeburgers: data.filter(item => item.devoured == 0),
                Devouredburgers: data.filter(item => item.devoured == 1)
            })
        });
        // {burgers: data}
    });

    // Create a new burger
    app.post("/burgers", function (req, res) {
        // create takes an argument of an object describing the item we want to insert
        // into our table. In this case we just we pass in an object with a text and
        // complete property
        db.burgers.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
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
    app.put("/burgers/:id", function (req, res) {
        db.burgers.update({
                //burger_name: req.body.burger_name,
                devoured: 1

            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function (data) {
                if (data.changedRows === 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                }

                res.status(200).end();
                res.json(data);
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

            })

    });
};