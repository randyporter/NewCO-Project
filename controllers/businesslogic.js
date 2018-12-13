//step 1 create business logic page the tell server about this controller
var express = require("express");

var router = express.Router();

var model = require("../models/model.js");
var states = require("simmigonstatespackage");


router.get("/", function (req, res) {
    var ThisnameDoesnotmatter =  {first : 'Megatron', last: 'Prime'} ;
   
    res.render("index",ThisnameDoesnotmatter);
   
});

router.get("/index", function (req, res) {
    res.render("index");
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.get("/home", function(req, res) {
  model.sites.all(function(data) {
    var siteData = {
      site: data
    };
    console.log(siteData);
    res.render("home", siteData);
  });
});

router.get("/admin", function (req, res) {
    res.render("admin");
});

router.get("/customer", function (req, res) {
    var ThisnameDoesnotmatter = { name: {first : 'Megatron', last: 'Prime'} };
    var ThisnamestillDoesnotmatter = { Firstname: 'Prime' };

    res.render("customer",{ThisnameDoesnotmatter,ThisnamestillDoesnotmatter});
});

router.get("/site", function (req, res) {

    var state = JSON.stringify(states);
    var ThisnameDoesnotmatter = { data: {findstates: state} };

    model.sites.all

    res.render("site", ThisnameDoesnotmatter);
});

// Step 2 add the controller for the page: step 1 is in the /partial/users/nav folder
router.get("/test", function (req, res) {
    // Step 3 tell the get request which page to load: step 1 is in the /partial/users/nav folder
    res.render("test");
});

//Example of how to use model
// router.get("/login", function (req, res) {
//     model.all(function (data) {
//         var insuranceObject = {
//             model: data
//         };
//         res.render("login", insuranceObject);
//     });
// });

module.exports = router;
