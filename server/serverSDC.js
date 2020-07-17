require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
//import seq instance from db
const { sequelize, DataTypes } = require('../database/dbSDC.js');
const { Op } = require("sequelize")

//importing models using sequelize-auto
const Artist = require("../database/models/artists.js")(sequelize, DataTypes);
const Album = require("../database/models/albums.js")(sequelize, DataTypes);
const Song = require("../database/models/songs.js")(sequelize, DataTypes);

const port = 3273;
const app = express();
app.use(express.static('public'));


/* MidleWares */
app.use(bodyParser.json());

app.get('/artists', (req, res) => {
  Artist.findAll({
    where: {
      artists_id: 190000,
    }
  })
  .then(artist => res.send(artist));
});

app.get('/albums/:artistId', (req, res) => {
  Album.findAll({
    where: {
      artist_id: 190000,
    },
  })
  .then(album => res.send(album));
});

app.get('/songs/:id', (req, res) => {
  Song.findAll({
    where: {
      artist_id: 5000,


    },
  })
  .then(songs => res.send(songs[0].mp3_url));
});

app.listen(port, () => {
  console.log("server running on port 3273")
});