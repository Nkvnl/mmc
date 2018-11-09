var express = require("express");
var app = express();
var blogSchema = require("../models/blog");
var router = express.Router();



router.get("/", function(req, res) {
    // Get all campgrounds from DB
    console.log(req.user);
    blogSchema.find({}, function(err, blogAll) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { blogs: blogAll, currentUser: req.user });
        }
    });
});


router.post("/", function(req, res) {
    // get data from form and add to campgrounds array
    var title = req.body.title;
    var seo = req.body.seo;
    var desc = req.body.desc;
    var date = req.body.date;
    var thumb = req.body.thumb;
    var thumbdesc = req.body.thumbdesc;
    var bannerdesc = req.body.bannerdesc;
    var banner = req.body.banner;
    var content = req.body.content;
    var newBlog = {
        title: title,
        thumb: thumb,
        thumbdesc: thumbdesc,
        bannerdesc: bannerdesc,
        banner: banner,
        seo: seo,
        desc: desc,
        date: date,
        content: content,
    };
    // Create a new campground and save to DB
    blogSchema.create(newBlog, function(err, newlyCreated) {
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
