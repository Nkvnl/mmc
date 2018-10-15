var express = require("express"); // call express
var app = express();
const compression = require('compression');
var robots = require('express-robots-txt');
var sitemap = require('express-sitemap');

app.use(compression());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(robots({ UserAgent: '*', Disallow: '' }))

app.get('*', function(req, res, next) {
    if (req.headers['x-forwarded-proto'] != 'https')
        res.redirect('https://www.meditatie.co' + req.url)
    else
        next() /* Continue to other routes if we're not redirecting */
})

sitemap({
    map: {
        '/': ['get'],
    },
    route: {
        '/15-wetenschappelijl-bewezen-voordelen-meditatie': {

        },
    },
}).XMLtoFile();

// var app = express(),
//     sitemap = sm.createSitemap({
//         hostname: 'http://www.boo-at-the-zoo.nl',
//         cacheTime: 600000, // 600 sec - cache purge period
//         urls: [
//             { url: '/', changefreq: 'daily', priority: 0.3 },

//         ]
//     });

// app.get('/sitemap.xml', function(req, res) {
//     sitemap.toXML(function(err, xml) {
//         if (err) {
//             return res.status(500).end();
//         }
//         res.header('Content-Type', 'application/xml');
//         res.send(xml);
//     });
// });
app.get("/", function(req, res) {
    res.render("index");
});

app.get("/15-wetenschappelijl-bewezen-voordelen-meditatie", function(req, res) {
    res.render("15");
});

app.get("/luisteren-naar-de-wereld", function(req, res) {
    res.render("luisteren");
});

app.get("/mindful-met-vipassana", function(req, res) {
    res.render("harris");
});

app.get("/1-uurs-meditatie-goenka", function(req, res) {
    res.render("goenka");
});

app.get("/geleide-mindfulness-meditatie-kabat-zinn", function(req, res) {
    res.render("kabatzinn");
});

app.get("/geleide-meditatie-lichaam-ruimte-bewustzijn", function(req, res) {
    res.render("mingyur");
});

app.get("/vol-van-vreugde", function(req, res) {
    res.render("volvanvreugde");
});

app.get("/alan-watts", function(req, res) {
    res.render("alanwatts");
});

app.get("", function(req, res) {
    res.render("20");
});

// app.get('/robots.txt', function(req, res) {
//     res.type('text/plain');
//     res.send("User-agent: *\nDisallow: /");
// });

app.listen(process.env.PORT, process.env.IP, function() { // tell node to listen & define a port to view app
    console.log("Passier server starting...");
});
