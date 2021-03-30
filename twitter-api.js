var Twitter = require("twitter");
require("dotenv").config();

var client = new Twitter({
  consumer_key: process.env.APIKEY,
  consumer_secret: process.env.APIKEY,
  bearer_token: process.env.APIKEY,
});

var params = { screen_name: "dawa3_4" };
client.get("friends/ids", params, function (error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  console.log("Status code!!!!!");
  console.log(response.statusCode);
  console.log(response.toJSON().body);
});
