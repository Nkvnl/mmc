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
        '/hatha-yoga': ['get'],
        '/over-chakras': ['get'],
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
        '/hatha-yoga': {},
        '/over-chakras': {},
        '/blog': {},
    },
}).XMLtoFile();
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

app.get("/stress-verminderen-meditatie", function(req, res) {
    res.render("stress");
});

app.get("/privacy", function(req, res) {
    res.render("privacy");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

app.get("/sri-mooji", function(req, res) {
    res.render("over-mooji");
});

app.get("/goenka", function(req, res) {
    res.render("goenka");
});

app.get("/", function(req, res) {
    res.render("");
});

app.get("/", function(req, res) {
    res.render("");
});

app.get("/", function(req, res) {
    res.render("");
});

app.get("/", function(req, res) {
    res.render("");
});

app.get("/", function(req, res) {
    res.render("");
});

app.get("/", function(req, res) {
    res.render("");
});

app.get("/", function(req, res) {
    res.render("");
});

app.get("/", function(req, res) {
    res.render("");
});

app.get("/", function(req, res) {
    res.render("");
});






// app.get('/robots.txt', function(req, res) {
//     res.type('text/plain');
//     res.send("User-agent: *\nDisallow: /");
// });

app.listen(process.env.PORT, process.env.IP, function() { // tell node to listen & define a port to view app
    console.log("Passier server starting...");
});
