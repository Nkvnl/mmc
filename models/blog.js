var mongoose = require("mongoose");
// var blogSpotlightSchema = require("blogspot");

var Blog = new mongoose.Schema({
    // TITLE
    titleGuide: String,
    titleBook: String,
    titleTech: String,
    titleTeach: String,
    titleSpot: String,
    title: String,
    // SEO
    seoGuide: String,
    seoBook: String,
    seoTech: String,
    seoTeach: String,
    seoSpot: String,
    seo: String,
    // THUMB
    thumbGuide: String,
    thumbBook: String,
    thumbTech: String,
    thumbTeach: String,
    thumbSpot: String,
    thumb: String,
    // BANNER
    bannerGuide: String,
    bannerBook: String,
    bannerTech: String,
    bannerTeach: String,
    bannerSpot: String,
    banner: String,
    // THUMBDESC
    thumbdescGuide: String,
    thumbdescBook: String,
    thumbdescTech: String,
    thumbdescTeach: String,
    thumbdescSpot: String,
    thumbdesc: String,
    // BANNERDESC
    bannerdescGuide: String,
    bannerdescBook: String,
    bannerdescTech: String,
    bannerdescTeach: String,
    bannerdescSpot: String,
    bannerdesc: String,
    // DESC
    descGuide: String,
    descBook: String,
    descTech: String,
    descTeach: String,
    descSpot: String,
    desc: String,
    // DATE
    dateGuide: String,
    dateBook: String,
    dateTech: String,
    dateTeach: String,
    dateSpot: String,
    date: String,
    // CONTENT
    contentGuide: String,
    contentBook: String,
    contentTeach: String,
    contentTech: String,
    contentSpot: String,
    content: String,
});


module.exports = mongoose.model("Blog", Blog);
