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
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
var nodemailer = require("nodemailer");
var path = require('path');
var methodOverride = require("method-override");


mongoose.connect("mongodb://localhost/meditatie");
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

var blogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    date: String,
    content: String,
    img: String,
});
var Blog = mongoose.model("Blog", blogSchema);



//ROUTES

app.get("/index", function(req, res) {
    // Get all campgrounds from DB
    console.log(req.user);
    Blog.find({}, function(err, blogAll) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { blogs: blogAll, currentUser: req.user });
        }
    });
});

app.post("/index", function(req, res) {
    // get data from form and add to campgrounds array
    var title = req.body.title;
    var seo = req.body.seo;
    var desc = req.body.desc;
    var date = req.body.date;
    var content = req.body.content;
    var thumb = req.body.thumb;
    var banner = req.body.banner;
    var content = req.body.content;
    var newBlog = {
        title: title,
        thsumb: thumb,
        banner: banner,
        seo: seo,
        desc: desc,
        date: date,
        content: content,
    };
    // Create a new campground and save to DB
    Blog.create(newBlog, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            //redirect back to campgrounds page
            res.redirect("/index");
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

// app.get("/15-wetenschappelijl-bewezen-voordelen-meditatie", function(req, res) {
//     res.render("15");
// });

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

// app.get("/begin", function(req, res) {
//     res.render("begin");
// });

// app.get("/mindfulness", function(req, res) {
//     res.render("mindfulness");
// });

// app.get("/burnout-helpen-meditatie", function(req, res) {
//     res.render("burnout");
// });

// app.get("/emoties-laten-gaan", function(req, res) {
//     res.render("emoties");
// });

// app.get("/dagelijkse-meditatie-routine", function(req, res) {
//     res.render("routine");
// });

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

app.get("/register", function(req, res) {
    res.render("register");
});

app.get("/newblog", function(req, res) {
    res.render("newBlog");
});


app.post("/register", function(req, res) {
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

app.delete("/index/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/blog");
        }
        else {
            res.redirect("/blog");
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
