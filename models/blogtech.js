var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var blogTechSchema = new mongoose.Schema({
    titleTech: String,
    seoTech: String,
    thumbTech: String,
    bannerTech: String,
    thumbdescTech: String,
    bannerdescTech: String,
    descTech: String,
    dateTech: String,
    contentTech: String,
});


module.exports = mongoose.model("blogTechSchema", blogTechSchema);
