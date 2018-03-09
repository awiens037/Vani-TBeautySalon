// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =============================================================
// Get rotue for retrieving a single post
// router.get("/appointments", function (req, res) {
//     db.Appointments.findAll({
      
//     }).then(function (data) {
//       res.json(data);
//     });
//   });


router.get("/appointment", function (req, res) {
    res.render('appointment');
    console.log(
        'hit appointment path'
    )
  });


// POST route for saving a new post
router.post("/appointment", function (req, res) {
//   db.Post.create(req.body)
  console.log('this is working')
  db.appointments.create({
      services: req.body.services,
      date: req.body.date,
      time: req.body.time,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      stylist: req.body.stylist
  })
  
  .then(function (data) {
    res.json(data);
    console.log(data)
    console.log('this is working')
  });
});

// DELETE route for deleting posts
router.delete("/api/posts/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

// PUT route for updating posts
router.put("/api/posts", function (req, res) {
  db.Post.update(
    req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbPost) {
    res.json(dbPost);
  });
});

module.exports = router;

