var Nightmare = require("nightmare");
var expect = require("chai").expect;

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://aqueous-forest-79100.herokuapp.com/dashboard")
  .click(".text")
  .type(".text", "leeland_clenista@yahoo.com")
  .click("#password")
  .type("#password", "password")
  .click(".btn")
  .evaluate(function() {
    
  })
  .end()
  .then(function(result) {
    console.log('this works')
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
