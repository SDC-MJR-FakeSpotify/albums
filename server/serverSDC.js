// require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//import seq instance from db
const { sequelize, DataTypes } = require('../database/dbSDC.js');
const { Op } = require("sequelize")


//importing models using sequelize-auto
const Artist = require("../database/models/artists.js")(sequelize, DataTypes);
const Album = require("../database/models/albums.js")(sequelize, DataTypes);
const Song = require("../database/models/songs.js")(sequelize, DataTypes);

const port = 3273;
const app = express();

app.use(cors());
app.use(express.static('public'));


/* MidleWares */
app.use(bodyParser.json());

app.get('/artists', (req, res) => {
  let random = Math.floor(Math.random() * 199999);
  Artist.findAll({
    where: {
      artists_id: random,
    }
  })
  .then(artist => res.send(artist));
});

app.get('/albums/:artistId', (req, res) => {
  let random = Math.floor(Math.random() * 199999);
  Album.findAll({
    where: {
      artist_id: random,
    },
  })
  .then(album => res.send([album]));
});

app.get('/songs/:id', (req, res) => {
  let random = Math.floor(Math.random() * 199999);
  Song.findAll({
    where: {
      artist_id: random,
    },
  })
  .then(songs => res.send(songs));
});

// app.get('/loaderio-5bbec141bfe630519f23a5cdf08aad7b', (req, res) => {
//   res.send('loaderio-5bbec141bfe630519f23a5cdf08aad7b');
// });

app.listen(port, () => {
  console.log("server running on port 3273")
});