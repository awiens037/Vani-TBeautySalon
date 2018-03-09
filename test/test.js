var Nightmare = require("nightmare");
var expect = require("chai").expect;

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://localhost:8080/signin")
  .type("#email", "leeland_clenista@yahoo.com")
  .type("#password", "password")
  .click("#btn")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
