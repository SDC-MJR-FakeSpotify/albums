const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-west-2",
  // endpoint: "http://localhost:3000" < --- not needed for some reason, Table shows un in AWS console
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "Artists",
  KeySchema: [
    {AttributeName: "artists_id", KeyType:"HASH"},
    {AttributeName: "unique_id", KeyType:"RANGE"},
  ],
  AttributeDefinitions: [
    {AttributeName: "artists_id", AttributeType: "N"},
    {AttributeName: "unique_id", AttributeType: "S"},
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.log("Unable to create table.", JSON.stringify(err, null, 2));
  } else {
    console.log("Created table. Table description JSON: ", JSON.stringify(data, null, 2));
  }
});