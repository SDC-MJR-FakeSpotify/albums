require('newrelic');
const express = require('express');
const cors = require('cors');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const bodyParser = require('body-parser');

const generateData = require('../database/generateDataSDC.js');

//import seq instance from db
const { sequelize, DataTypes } = require('../database/dbSDC.js');
const { Op } = require("sequelize")

//importing models using sequelize-auto
const Artist = require("../database/models/artists.js")(sequelize, DataTypes);
const Album = require("../database/models/albums.js")(sequelize, DataTypes);
const Song = require("../database/models/songs.js")(sequelize, DataTypes);

//importing models from mongo db
const { mongo, mongoArtist, mongoAlbum, mongoSong } = require('../database/sdcMongo/mdb.js');

const port = 3000;
const app = express();

/* MidleWares */
app.use(cors());
app.use(bodyParser.json());

// creates mock data for artists, albums, and songs and stores in db
// uses generate data helper functions
// app.post('/generate', async (req, res) => {
//   await generateData()
//     .then(() => res.send('...data generated'));
// });

app.get('/artists', (req, res) => {
  Artist.findAll({
    where: {
      artists_id: 190000,
    }
  })
  .then(artist => res.send(artist));
});

app.get('/albums', (req, res) => {
  Album.findAll({
    where: {
      artist_id: 190000,
    },
  })
  .then(album => res.send(album));
});

app.get('/songs', (req, res) => {
  Song.findAll({
    where: {
      id: 1805000,
    },
  })
  .then(songs => res.send(songs[0].mp3_url));
});

// uncomment when using sequelize
sequelize.sync({ force: false })
  .then(async () => {
    app.listen(port, () => {
      console.log("server running on port 3000")
    });
  });



//MONGO ROUTES BELOW
// app.get('/mongoartists', async (req, res) => {
//   await mongoArtist.find({
//     artist_id: 199000,
//     // artist_id: { $gt: 199000 }
//   })
//     .then((item) => res.send(item));
// });
// app.get('/mongoalbums', async (req, res) => {
//   await mongoAlbum.find({ artist_id: 10000})
//     .then((item) => res.send(item));
// });

// // find a songs url by albumid/artistid
// app.get('/mongosongs', async (req, res) => {
//   await mongoSong.find({
//     album_id: 1,
//     artist_id: {$gt : 199900}})
//     .then((item) => res.send(item[0].mp3_url));
// })

// app.listen(port, () => {
//   console.log("server running on port 3000")
// });