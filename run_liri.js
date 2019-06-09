require("dotenv").config();
var axios = require("axios")

// ALL YOUR PACKAGES STORED IN VARIABLES 
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);


// =====================================
// Spotify 
// var song = process.argv[2];
// var spotURL = "" + song + "";

// ==================================
// OMDB
var movie = process.argv[3];
var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=d92dc921";


axios.get(queryURL).then(
    function (response) {
        if (process.argv[2] === "movie-this") {
        console.log("===================================")
        // console.log(response.data)
        console.log("Here's what I found:\n")
        console.log("Title:" + response.data.Title)
        console.log("Rated:" + response.data.Rated)
        console.log("Year Released:" + response.data.Released)
        console.log("===================================")

    }});
// =====================================
// bands in town
var artist = process.argv[3];
var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
// 
axios.get(bandURL).then(
    function (response) {
        if (process.argv[2] === "CONCERT-THIS") {
        console.log("===================================")
        // console.log(response.data);
        console.log("Here's what I found:" + response.data.length)
        // var concertArray;
        // console.log(response.data[0])
        console.log(response.data[0].venue)
        //for loop 
        console.log("===================================")

}});

