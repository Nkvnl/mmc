var express = require("express"); // call express
var app = express();
const compression = require('compression');
var robots = require('express-robots-txt');
var sitemap = require('express-sitemap');
var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    Blog = require("./models/blog"),
    // blogSpotlightSchema = require("./models/blog"),
    // blogTeachSchema = require("./models/blogteach"),
    // blogTechSchema = require("./models/blogtech"),
    // blogGuide = require("./models/blogguide"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
var nodemailer = require("nodemailer");
var path = require('path');
var methodOverride = require("method-override");
var sanitizeHtml = require('sanitize-html');
// var seedDB = require("./seeds")
// seedDB()

mongoose.connect("mongodb://nkvnl:meditatiec0@ds019664.mlab.com:19664/meditatieco");
app.use(compression());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(robots({ UserAgent: '*', Disallow: '' }))
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());








// app.post("/index", function(req, res) {
//     // get data from form and add to campgrounds array
//     var titleGuide = req.body.titleGuide;
//     var seoGuide = req.body.seoGuide;
//     var descGuide = req.body.descGuide;
//     var dateGuide = req.body.dateGuide;
//     var thumbGuide = req.body.thumbGuide;
//     var thumbdescGuide = req.body.thumbdescGuide;
//     var bannerdescGuide = req.body.bannerdescGuide;
//     var bannerGuide = req.body.bannerGuide;
//     var contentGuide = req.body.contentGuide;
//     var contentGuide = req.body.contentGuide;
//     var newBlogGuide = {
//         titleGuide: titleGuide,
//         thumbGuide: thumbGuide,
//         thumbdescGuide: thumbdescGuide,
//         bannerdescGuide: bannerdescGuide,
//         bannerGuide: bannerGuide,
//         seoGuide: seoGuide,
//         descGuide: descGuide,
//         dateGuide: dateGuide,
//         contentGuide: contentGuide,
//     };
//     // Create a new campground and save to DB
//     blogGuide.create(newBlogGuide, function(err, newlyCreated) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             //redirect back to campgrounds page
//             res.redirect("/");
//         }
//     });
// });


app.get("/", function(req, res) {
    Blog.find({}, function(err, blogAll) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { blogs: blogAll, currentUser: req.user });
        }
    });
});

app.get("/blogs/home", function(req, res) {
    Blog.find({}, function(err, blogAll) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("blog", { blogs: blogAll, currentUser: req.user });
        }
    });
});

app.get("/leraren/home", function(req, res) {
    Blog.find({}, function(err, blogAll) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("teach", { blogs: blogAll, currentUser: req.user });
        }
    });
});


app.get("/geleide-meditaties/home", function(req, res) {
    Blog.find({}, function(err, blogAll) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("guide", { blogs: blogAll, currentUser: req.user });
        }
    });
});


app.get("/technieken/home", function(req, res) {
    Blog.find({}, function(err, blogAll) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("tech", { blogs: blogAll, currentUser: req.user });
        }
    });
});



app.post("/", function(req, res) {
    // get data from form and add to campgrounds array
    var title = req.body.title;
    var titleGuide = req.body.titleGuide;
    var titleSpot = req.body.titleSpot;
    var titleTeach = req.body.titleTeach;
    var titleTech = req.body.titleTech;
    var titleBook = req.body.titleBook;
    //LINKS
    var link1 = req.body.link1
    var link1Spot = req.body.link1Spot
    var link1Teach = req.body.link1Teach
    var link1Tech = req.body.link1Tech
    //LINKS2
    var link2 = req.body.link2
    var link2Spot = req.body.link2Spot
    var link2Teach = req.body.link2Teach
    var link2Tech = req.body.link2Tech
    //SECONDARY IMAGE
    var img2 = req.body.img2
    var img2Spot = req.body.img2Spot
    var img2Teach = req.body.img2Teach
    var img2Tech = req.body.img2Tech
    // SEO
    var seoGuide = req.body.seoGuide;
    var seoTech = req.body.seoTech;
    var seoTeach = req.body.seoTeach;
    var seoSpot = req.body.seoSpot;
    var seoBook = req.body.seoBook;
    var seo = req.body.seo;
    // DESC
    var descGuide = req.body.descGuide;
    var descTech = req.body.descTech;
    var descTeach = req.body.descTeach;
    var descSpot = req.body.descSpot;
    var descBook = req.body.descBook;
    var desc = req.body.desc;
    // DATE
    var dateGuide = req.body.dateGuide;
    var dateBook = req.body.dateBook;
    var dateTech = req.body.dateTech;
    var dateTeach = req.body.dateTeach;
    var dateSpot = req.body.dateSpot;
    var date = req.body.date;
    // THUMB
    var thumbGuide = req.body.thumbGuide;
    var thumbTech = req.body.thumbTech;
    var thumbTeach = req.body.thumbTeach;
    var thumbSpot = req.body.thumbSpot;
    var thumbBook = req.body.thumbBook;
    var thumb = req.body.thumb;
    // THUMDESC
    var thumbdescGuide = req.body.thumbdescGuide;
    var thumbdescTech = req.body.thumbdescTech;
    var thumbdescTeach = req.body.thumbdescTeach;
    var thumbdescSpot = req.body.thumbdescSpot;
    var thumbdescBook = req.body.thumbdescBook;
    var thumbdesc = req.body.thumbdesc;
    // BANNERDESC
    var bannerdescGuide = req.body.bannerdescGuide;
    var bannerdescTech = req.body.bannerdescTech;
    var bannerdescTeach = req.body.bannerdescTeach;
    var bannerdescSpot = req.body.bannerdescSpot;
    var bannerdescBook = req.body.bannerdescBook;
    var bannerdesc = req.body.bannerdesc;
    // BANNER
    var bannerGuide = req.body.bannerGuide;
    var bannerTech = req.body.bannerTech;
    var bannerTeach = req.body.bannerTeach;
    var bannerSpot = req.body.bannerSpot;
    var bannerBook = req.body.bannerBook;
    var banner = req.body.banner;
    // CONTENT
    var contentGuide = req.body.contentGuide;
    var contentTech = req.body.contentTech;
    var contentTeach = req.body.contentTeach;
    var contentSpot = req.body.contentSpot;
    var contentBook = req.body.contentBook;
    var content = req.body.content;
    var newBlog = {
        // TITLE
        title: title,
        titleGuide: titleGuide,
        titleSpot: titleSpot,
        titleTech: titleTech,
        titleTeach: titleTeach,
        titleBook: titleBook,
        //LINKS
        link1: link1,
        link1Spot: link1Spot,
        link1Tech: link1Tech,
        link1Teach: link1Teach,
        //LINKS
        link2: link2,
        link2Spot: link2Spot,
        link2Tech: link2Tech,
        link2Teach: link2Teach,
        //IMG2
        img2: img2,
        img2Spot: img2Spot,
        img2Tech: img2Tech,
        img2Teach: img2Teach,
        // THUMB
        thumbGuide: thumbGuide,
        thumbTech: thumbTech,
        thumbTeach: thumbTeach,
        thumbSpot: thumbSpot,
        thumbBook: thumbBook,
        thumb: thumb,
        // THUMBDESC
        thumbdescGuide: thumbdescGuide,
        thumbdescTech: thumbdescTech,
        thumbdescTeach: thumbdescTeach,
        thumbdescSpot: thumbdescSpot,
        thumbdesc: thumbdesc,
        thumbdescBook: thumbdescBook,
        // BANNERDESC
        bannerdescGuide: bannerdescGuide,
        bannerdescTech: bannerdescTech,
        bannerdescTeach: bannerdescTeach,
        bannerdescSpot: bannerdescSpot,
        bannerdesc: bannerdesc,
        bannerdescBook: bannerdescBook,
        // BANNER
        bannerGuide: bannerGuide,
        bannerTech: bannerTech,
        bannerTeach: bannerTeach,
        bannerSpot: bannerSpot,
        bannerBook: bannerBook,
        banner: banner,
        //SEO
        seoGuide: seoGuide,
        seoTech: seoTech,
        seoTeach: seoTeach,
        seoSpot: seoSpot,
        seoBook: seoBook,
        seo: seo,
        // DESCGUIDE
        descGuide: descGuide,
        descTech: descTech,
        descTeach: descTeach,
        descSpot: descSpot,
        descBook: descBook,
        desc: desc,
        // DATE
        dateGuide: dateGuide,
        dateTech: dateTech,
        dateTeach: dateTeach,
        dateSpot: dateSpot,
        dateBook: dateBook,
        date: date,
        // CONTENT
        contentGuide: contentGuide,
        contentTech: contentTech,
        contentTeach: contentTeach,
        contentSpot: contentSpot,
        contentBook: contentBook,
        content: content,
    };
    // Create a new campground and save to DB
    Blog.create(newBlog, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            //redirect back to campgrounds page
            res.redirect("/");
        }
    });
});

app.get('*', function(req, res, next) {
    if (req.headers['x-forwarded-proto'] != 'https')
        res.redirect('https://www.meditatie.co' + req.url)
    else
        next() /* Continue to other routes if we're not redirecting */
})

app.use(function(req, res, next) {
    if (req.url.match(/^\/(css|js|img|font)\/.+/)) {
        res.setHeader('Cache-Control', 'public, max-age=3600'); // cache header
    }
    next();
});

sitemap({
    map: {
        '/': ['get'],
        '/15-wetenschappelijl-bewezen-voordelen-meditatie': ['get'],
        '/alan-watts': ['get'],
        '/metta-loving-kindness': ['get'],
        '/zen-zazen': ['get'],
        '/vipassana': ['get'],
        '/geleide-meditatie': ['get'],
        '/mantra-meditatie': ['get'],
        '/soorten-meditaties': ['get'],
        '/luisteren-naar-de-wereld': ['get'],
        '/vol-van-vreugde': ['get'],
        '/mindful-met-vipassan': ['get'],
        '/geleide-meditatie-lichaam-ruimte-bewustzijn': ['get'],
        '/1-uurs-meditatie-goenka': ['get'],
        '/geleide-mindfulness-meditatie-kabat-zinn': ['get'],
        '/geleide-meditaties': ['get'],
        '/sri-mooji': ['get'],
        '/sadhguru': ['get'],
        '/thich-nhat-hanh': ['get'],
        '/goenka': ['get'],
        '/leraren': ['get'],
        '/stress-verminderen-meditatie': ['get'],
        '/burnout-helpen-meditatie': ['get'],
        '/mindfulness': ['get'],
        '/contact': ['get'],
        '/avg': ['get'],
        '/emoties-laten-gaan': ['get'],
        '/dagelijkse-meditatie-routine': ['get'],
        '/sadghuru': ['get'],
        '/blog': ['get'],
        '/blog': ['get'],
        '/blog': ['get'],
    },
    route: {
        '/': {},
        '/15-wetenschappelijl-bewezen-voordelen-meditatie': {},
        '/alan-watts': {},
        '/metta-loving-kindness': {},
        '/zen-zazen': {},
        '/vipassana': {},
        '/geleide-meditatie': {},
        '/mantra-meditatie': {},
        '/soorten-meditaties': {},
        '/luisteren-naar-de-wereld': {},
        '/vol-van-vreugde': {},
        '/mindful-met-vipassan': {},
        '/geleide-meditatie-lichaam-ruimte-bewustzijn': {},
        '/1-uurs-meditatie-goenka': {},
        '/geleide-mindfulness-meditatie-kabat-zinn': {},
        '/geleide-meditaties': {},
        '/sri-mooji': {},
        '/sadhguru': {},
        '/thich-nhat-hanh': {},
        '/goenka': {},
        '/leraren': {},
        '/stress-verminderen-meditatie': {},
        '/burnout-helpen-meditatie': {},
        '/mindfulness': {},
        '/over': {},
        '/avg': {},
        '/contact': {},
        '/emoties-laten-gaan': {},
        '/sadhguru': {},
        '/dagelijkse-meditatie-routine': {},
        '/blog': {},
        '/blog': {},
        '/blog': {},
    },
}).XMLtoFile();

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/15-wetenschappelijk-bewezen-voordelen-meditatie", function(req, res) {
    res.render("15");
});

// app.get("/luisteren-naar-de-wereld", function(req, res) {
//     res.render("luisteren");
// });

// app.get("/mindful-met-vipassana", function(req, res) {
//     res.render("harris");
// });

// app.get("/1-uurs-meditatie-goenka", function(req, res) {
//     res.render("goenka");
// });

// app.get("/geleide-mindfulness-meditatie-kabat-zinn", function(req, res) {
//     res.render("kabatzinn");
// });

// app.get("/geleide-meditatie-lichaam-ruimte-bewustzijn", function(req, res) {
//     res.render("mingyur");
// });

// app.get("/vol-van-vreugde", function(req, res) {
//     res.render("volvanvreugde");
// });

// app.get("/alan-watts", function(req, res) {
//     res.render("alanwatts");
// });

// app.get("/stress-verminderen-meditatie", function(req, res) {
//     res.render("stress");
// });

// app.get("/privacy", function(req, res) {
//     res.render("privacy");
// });

// app.get("/contact", function(req, res) {
//     res.render("contact");
// });

// app.get("/sri-mooji", function(req, res) {
//     res.render("over-mooji");
// });

// app.get("/goenka", function(req, res) {
//     res.render("goenka");
// });

app.get("/begin", function(req, res) {
    res.render("begin");
});

// app.get("/mindfulness", function(req, res) {
//     res.render("mindfulness");
// });

// app.get("/burnout-helpen-meditatie", function(req, res) {
//     res.render("burnout");
// });

// app.get("/emoties-laten-gaan", function(req, res) {
//     res.render("emoties");
// });

app.get("/routine", function(req, res) {
    res.render("routine");
});

// app.get("/sadhguru", function(req, res) {
//     res.render("sadhguru");
// });

// app.get("/over", function(req, res) {
//     res.render("over");
// });

// app.get("/contact", function(req, res) {
//     res.render("contact");
// });

// app.get("/avg", function(req, res) {
//     res.render("avg");
// });

// app.get("/slaap-meditatie", function(req, res) {
//     res.render("slaapv");
// });

// app.get("/niet-kunnen-slapen-meditatie", function(req, res) {
//     res.render("slaapb");
// });

// app.get("/metta-meditatie", function(req, res) {
//     res.render("metta");
// });

// app.get("/vipassana-meditatie", function(req, res) {
//     res.render("vipassana");
// });

// app.get("/meditatie-kussen", function(req, res) {
//     res.render("kussen");
// });


app.get("/dashboard", isLoggedIn, function(req, res) {
    res.render("dashboard");
});

app.get("/register", isLoggedIn, function(req, res) {
    res.render("register");
});

app.get("/newblog", isLoggedIn, function(req, res) {
    res.render("newBlog");
});

app.get("/newblogguide", isLoggedIn, function(req, res) {
    res.render("newBlogGuide");
});

app.get("/newblogtech", isLoggedIn, function(req, res) {
    res.render("newBlogTech");
});

app.get("/newblogteach", isLoggedIn, function(req, res) {
    res.render("newBlogTeach");
});

app.get("/newblogbook", isLoggedIn, function(req, res) {
    res.render("newBlogBook");
});

app.get("/newblogspotlight", isLoggedIn, function(req, res) {
    res.render("newBlogSpot");
});



app.post("/register", isLoggedIn, function(req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/login");
        });
    });
});

app.get("/blog/home/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("editBlog", { blog: foundBlog })
        }
    })
})

app.get("/blog/spotlight/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("editBlogSpot", { Blog: foundBlog })
        }
    })
})

app.get("/leraren/home/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("editBlogTeach", { blog: foundBlog })
        }
    })
})

app.get("/technieken/home/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("editBlogTech", { blog: foundBlog })
        }
    })
})

app.get("/geleide-meditaties/home/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("editBlogGuide", { blog: foundBlog });
        }
    });
});

app.put("/blog/spotlight/:id", function(req, res) {
    res.send("UPDATE!");
});


app.delete("/blog/home/:id", isLoggedIn, function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/");
        }
        else {
            res.redirect("/");
        }
    });
});

app.delete("/blog/spotlight/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/");
        }
        else {
            res.redirect("/");
        }
    });
});

app.delete("/leraren/home/:id", isLoggedIn, function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/");
        }
        else {
            res.redirect("/");
        }
    });
});

app.delete("/geleide-meditaties/home/:id", isLoggedIn, function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/");
        }
        else {
            res.redirect("/");
        }
    });
});

app.delete("/technieken/home/:id", isLoggedIn, function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/");
        }
        else {
            res.redirect("/");
        }
    });
});

app.get("/login", function(req, res) {
    res.render("login");
});
//login logic
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
}), function(req, res) {});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");

}

app.get("/blog/technieken/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, blogID) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("showTech", { Blog: blogID });
        }
    });
});

app.get("/blog/geleide-meditaties/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, blogID) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("showGuide", { Blog: blogID });
        }
    });
});

app.get("/blog/leraren/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, blogID) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("showTeach", { Blog: blogID });
        }
    });
});

app.get("/blog/spotlight/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, blogID) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("showSpot", { Blog: blogID });
        }
    });
});

app.get("/blog/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, blogID) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("show", { Blog: blogID });
        }
    });
});





// app.get('/robots.txt', function(req, res) {
//     res.type('text/plain');
//     res.send("User-agent: *\nDisallow: /");
// });

app.listen(process.env.PORT, process.env.IP, function() { // tell node to listen & define a port to view app
    console.log("Passier server starting...");
});
