var mongoose = require("mongoose");
var blogSchema = require("./models/blog");
var blogGuide = require("./models/blogguide");

var data = [{
        title: "Meditatie",
        date: "15 Oktober 2018",
        thumb: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
        title: "Meditatie",
        date: "15 Oktober 2018",
        thumb: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
        title: "Meditatie",
        date: "15 Oktober 2018",
        thumb: "https://images.pexels.com/photos/1557650/pexels-photo-1557650.jpeg?auto=compress&cs=tinysrgb&h=350"
    }
];

function seedDB() {
    blogSchema.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("removed posts");
            data.forEach(function(seed) {
                blogSchema.create(seed, function(err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("added post");
                        blogGuide.create({
                                title: "Meditatie",
                                date: "19 Oktober 2018",
                                thumb: "https://images.pexels.com/photos/1209658/pexels-photo-1209658.jpeg?auto=compress&cs=tinysrgb&h=350"
                            }
                            // function(err, blogGuide) {
                            //     if (err) {
                            //         console.log(err);
                            //     }
                            //     else {
                            //         blogSchema.blogguides.push(blogGuide);
                            //         blogSchema.save();
                            //         console.log("Created a new comment");
                            //     }
                            // }
                        );
                    }
                });
            });
        }
    });

}

module.exports = seedDB;
