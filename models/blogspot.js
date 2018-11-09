var mongoose = require("mongoose");
blogSpotlightSchema = require("./models/blog");

var blogSpotlightSchema = new mongoose.Schema({
    title: String,
    seo: String,
    thumb: String,
    banner: String,
    thumbdesc: String,
    bannerdesc: String,
    desc: String,
    date: String,
    content: String,
});


module.exports = mongoose.model("blogSpotlightSchema", blogSpotlightSchema);
