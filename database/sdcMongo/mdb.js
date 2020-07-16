const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sdcSpotify', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('connected!');
});

const artistSchema = new mongoose.Schema({
  artist_id: Number,
  name: String,
  bio: String,
  image_url: String,
  unique_id: String,
})
const mongoArtist = mongoose.model('Artist', artistSchema);

const albumSchema = new mongoose.Schema({
  album_id: Number,
  title: String,
  type: String,
  image_url: String,
  artist_id: Number,

})
const mongoAlbum = mongoose.model('Album', albumSchema);

const songSchema = new mongoose.Schema({
  title: String,
  album_id: Number,
  type: String,
  featured_artists: String,
  image_url: String,
  mp3_url: String,
  duration: Number,
  listens: Number,
  explicit: Number,
  artist_id: Number,
})

const mongoSong = mongoose.model('Song', songSchema);

// const seedArtist = new mongoArtist({
//   artist_id: -1,
//   name: "Robin L",
//   bio: "Robin L Bio",
//   image_url: "www.someurl.com",
//   unique_id: "1a"
// });

// const seedAlbum = new Album({
//   album_id: -1,
//   title: "Robin L",
//   type: "Robin L type",
//   image_url: "www.someurl.com",
//   artist_id: -1,
// });

// const seedSong = new Song({
//   title: "Robin L",
//   album_id: -1,
//   type: "Robin L type",
//   featured_artists: "",
//   image_url: "www.someurl.com",
//   mp3_url: "www.someurl.com",
//   duration: 666,
//   listens: 667,
//   exlicit: false,
//   artist_id: -1,
// });

// seedArtist.save((err) => {
//   if(err){
//     console.log(err)
//   }
// });

// seedAlbum.save((err) => {
//   if(err){
//     console.log(err)
//   }
// })

// seedSong.save((err) => {
//   if(err){
//     console.log(err)
//   }
// })

module.exports = { mongoArtist, mongoAlbum, mongoSong};