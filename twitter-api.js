var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  bearer_token: "",
});

var params = { screen_name: "dawa3_4" };
client.get("useres/lookup", params, function (error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
