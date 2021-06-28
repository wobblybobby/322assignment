const express = require('express');
// Import fake db model
const PropertyModel = require("../models/PropertyModel.js");
const router = express.Router();

const allProperties = PropertyModel.getAllProperties();
const featuredProperties = PropertyModel.getFeaturedProperties();

// ROUTES
// Home page
router.get('/', function (req, res) {
    /* const pageDesc = "This is the home page!" */
    res.render("home.handlebars", {title: "Home Page", featuredProperties, allProperties});
})

// Vacation Destination Property Listing Page - All listings
router.get('/property-listing/all', function (req, res) {
    /* const pageDesc = "This is the vacation destination property listing page!"; */
    res.render("listing.handlebars", {title: "Property Listings", allProperties});
})

// Vacation Destination Property Listing Page - Listings By Type
router.get('/property-listing/type/:type', function (req, res) {
    /* const pageDesc = "This is the vacation destination property listing page!"; */

    let reqType = req.params.type.slice(0, -1);
    let propertyByType = PropertyModel.getSetByType(reqType);
    res.render("listing.handlebars", {title: "Property Listings", reqType, propertyByType});
})

// Vacation Destination Property Listing Page - Listings By Location
router.get('/property-listing/location/:location', function (req, res) {
    /* const pageDesc = "This is the vacation destination property listing page!"; */
     // hyphen
    let reqLocation = req.params.location;
    let reqParam = reqLocation[0].toUpperCase() + reqLocation.substring(1);
    if (reqParam.includes("United"))
        reqParam = "United " + reqLocation.slice(5)[1].toUpperCase() + reqLocation.slice(6).substring(1);
    let propertyByLocation = PropertyModel.getSetByLocation(reqLocation);
    res.render("listing.handlebars", {title: "Property Listings", reqParam, propertyByLocation});
})


// Vacation Destination Property Details Page
router.get('/property-details/:id', function (req, res) {
    /* const pageDesc = "This is the vacation destination property details page!"; */

    let reqID = parseInt(req.params.id);
    let singleProperty = PropertyModel.getSingleProperty(reqID);
    res.render("details.handlebars", {title : "Property Details", singleProperty});
})

//Work-in-progress page for content and footers
router.get('/content/:content', function (req, res) {
    /* let pageDesc = "Sorry, this content page is still under construction!" */
    res.render("wip.handlebars", {title : "Content"});
})

router.get('/footer/:footer', function (req, res) {
/*     let pageDesc = "Sorry, this footer page is still under construction!" */
    res.render("wip.handlebars", {title : "Footer"});
})

router.get('/content', function (req, res) {
/*     let pageDesc = "Sorry, this footer page is still under construction!" */
    res.render("content.handlebars", {title : "Content"});
})

module.exports = router;