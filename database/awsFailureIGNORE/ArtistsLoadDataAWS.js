const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-west-2",
  // endpoint: "http://localhost:3000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");

// expects a file of json data containing all your required data.
const allArtists = JSON.parse(fs.readFileSync('csvjson.json', 'utf8'));
allArtists.forEach((artist) => {
  const params = {
    TableName: "Artists",
    Item: {
      "artists_id": artist.artist_id,
      "unique_id": artist.unique_id,
      "name": artist.name,
      "bio": artist.bio,
      "image_url": artist.image_url,
    },
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.error("Unable to add artist", artist.name, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("PutItem succeeded:", artist.name);
    }
  });
});