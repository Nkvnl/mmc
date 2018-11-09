var express = require("express");
var app = express();
var blogGuide = require("../models/blogguide");
var router = express.Router();



router.get("/", function(req, res) {
    // Get all campgrounds from DB
    blogGuide.find({}, function(err, blogGuidesAll) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { blogguides: blogGuidesAll })
        }
    });
});

router.post("/index", function(req, res) {
    // get data from form and add to campgrounds array
    var titleGuide = req.body.titleGuide;
    var seoGuide = req.body.seoGuide;
    var descGuide = req.body.descGuide;
    var dateGuide = req.body.dateGuide;
    var thumbGuide = req.body.thumbGuide;
    var thumbdescGuide = req.body.thumbdescGuide;
    var bannerdescGuide = req.body.bannerdescGuide;
    var bannerGuide = req.body.bannerGuide;
    var contentGuide = req.body.contentGuide;
    var contentGuide = req.body.contentGuide;
    var newBlogGuide = {
        titleGuide: titleGuide,
        thumbGuide: thumbGuide,
        thumbdescGuide: thumbdescGuide,
        bannerdescGuide: bannerdescGuide,
        bannerGuide: bannerGuide,
        seoGuide: seoGuide,
        descGuide: descGuide,
        dateGuide: dateGuide,
        contentGuide: contentGuide,
    };
    // Create a new campground and save to DB
    blogGuide.create(newBlogGuide, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            //redirect back to campgrounds page
            res.redirect("/");
        }
    });
});

module.exports = router;
