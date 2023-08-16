const { Int32 } = require("mongodb");
var mongoose = require("mongoose");
var  movies = mongoose.Schema({
        id: Number,
        title: String,
        thumbnail: String,
        images: Array,
        year: String,
        video: String,
        trailer: String,
        imdb: String,
        language: String,
        kind: Array,
        quality: String,
        duration: String,
        rating: String,
        story: String,
        cast: Array,
        translator: String,
        production: String,
        classification: String,
        
});


module.exports=mongoose.model("foreignmovies",movies)


