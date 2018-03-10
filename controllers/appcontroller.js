// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =============================================================
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
    })

    .then(function (data) {
      res.json(data);
      console.log(data)
      console.log('this is working')
    });
});



module.exports = router;