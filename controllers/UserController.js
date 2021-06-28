const express = require('express');
const router = express.Router();

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false});

// ROUTES
// Customer Registration
router.get('/register', function (req, res) {
    
    res.render("register.handlebars", {title : "Register"});
})

router.post('/register', urlencodedParser, (req, res) => {

    let response1 = "";
    let response2 = "";
    let response3 = "";
    let response4 = "";
    let response5 = "";
    let response6 = "";
    let response7 = "";
    if (req.body.fname==="")
    {
        response1 = "No first name entered";
    }
    if (req.body.lname==="")
    {
        response2 = "No last name entered";
    }
    if (req.body.email==="")
    {
        response3 = "No email entered";
    }
    if (req.body.password==="")
    {
        response4 = "No password entered";
    }
    if (req.body.password != req.body.passwordconfirm)
    {
        response5 = "Passwords don't match";
    }
    if (/^[a-zA-Z0-9\.]*$/i.test(req.body.password) == false)
    {
        response6 = "Password must not contain any special characters";
    }
    if (/^[^a-zA-Z0-9]{6,12}$/i.test(req.body.password) == false)
    {
        response7 = "Password must be between 6-12 characters";
    }
    res.render("register.handlebars", {response1, response2, response3, response4, response5, response6, response7});
})

// Login
router.get('/login', function (req, res) {

    res.render("login.handlebars", {title : "Login"});
})

router.post('/login', urlencodedParser, (req, res) => {
    let response1="";
    let response2="";
    if (req.body.email==="")
    {
        response1 = "No email entered";
    }
    if (req.body.password==="")
    {
        response2 = "No password entered";
    }

    res.render("login.handlebars", {response1, response2});

})

module.exports = router