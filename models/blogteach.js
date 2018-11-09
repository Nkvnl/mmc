var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var blogTeachSchema = new mongoose.Schema({
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


module.exports = mongoose.model("blogTeachSchema", blogTeachSchema);
