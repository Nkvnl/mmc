var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var blogGuideSchema = new mongoose.Schema({
    titleGuide: String,
    seoGuide: String,
    thumbGuide: String,
    bannerGuide: String,
    thumbdescGuide: String,
    bannerdescGuide: String,
    descGuide: String,
    dateGuide: String,
    contentGuide: String,
});


module.exports = mongoose.model("blogGuide", blogGuideSchema);
