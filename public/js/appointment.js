$(document).ready(function() {

    var service = $(".service");
    var date = $(".datepicker");
    var time = $(".timepicker");
    var first_name = $("#first_name");
    var last_name = $("#last_name");
    var email = $("#email");
    var telephone = $("#telephone");


    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });

    $('.timepicker').pickatime({
        default: 'now', // Set default time: 'now', '1:30AM', '16:30'
        fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: true, // Use AM/PM or 24-hour format
        donetext: 'OK', // text for done-button
        cleartext: 'Clear', // text for clear-button
        canceltext: 'Cancel', // Text for cancel-button
        autoclose: false, // automatic close timepicker
        ampmclickable: true, // make AM PM clickable
        aftershow: function() {} //Function for after opening timepicker
    });

    $('#newAppointment').on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    // if (!titleInput.val().trim() || !bodyInput.val().trim()) {
    //   return;
    // }
    // Constructing a newPost object to hand to the database
    var newAppointment = {
      service: service.val().trim(),
      date: date.val(),
      time: time.val(),
      first_name: first_name.val().trim(),
      last_name: last_name.val().trim(),
      email: email.val().trim(),
      telephone: telephone.val()
    };

    console.log(newAppointment);

    $.ajax("/appointment", {
      type: "POST",
      data: newAppointment
    }).then(
    function(){
      console.log("created new appointment");
      location.reload();
    })

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    // if (updating) {
    //   newPost.id = postId;
    //   updatePost(newAppointment);
    // }
    // else {
    //   submitPost(newAppointment);
    // }
  });
});