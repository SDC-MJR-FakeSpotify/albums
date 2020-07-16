const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');
const uniqid = require('uniqid');


const csvWriterArtist = createCsvWriter({
  path: './dataArtists.csv',
  header: [
    { id: 'artist_id', title: 'artist_id' },
    { id: 'name', title: 'name' },
    { id: 'bio', title: 'bio' },
    { id: 'image_url', title: 'image_url' },
    { id: 'unique_id', title: 'unique_id' }
  ]
});

const csvWriterAlbum = createCsvWriter({
  path: './dataAlbums.csv',
  header: [
    { id: 'album_id', title: 'album_id' },
    { id: 'title', title: 'title' },
    { id: 'type', title: 'type' },
    { id: 'image_url', title: 'image_url' },
    { id: 'artist_id', title: 'artist_id' },
  ]
});

const csvWriterSong = createCsvWriter({
  path: './dataSongs.csv',
  header: [
    { id: 'title', title: 'title' },
    { id: 'album_id', title: 'album_id' },
    { id: 'type', title: 'type' },
    { id: 'featured_artists', title: 'featured_artists' },
    { id: 'image_url', title: 'image_url' },
    { id: 'mp3_url', title: 'mp3_url' },
    { id: 'duration', title: 'duration' },
    { id: 'listens', title: 'listens' },
    { id: 'explicit', title: 'explicit' },
    { id: 'artist_id', title: 'artist_id' },
  ]
});

const getGenre = () => {
  const genres = ["Pop", "Rock", "Country", "Electronic", "Classical", "Metal"]
  const ran = Math.floor(Math.random() * 7);

  return genres[ran] || null;
};

const generateData = async () => {
  const artists = [];// 200k
  const albums = [];// 800k
  const songs = [];// 9m

  for (let i = 0; i < 200000; i++) {
    const artistObj = {
      artist_id: i,
      name: faker.name.firstName(),
      bio: faker.lorem.sentence(),
      image_url: faker.internet.url(),
      unique_id: uniqid(),
    };
    for (let j = 0; j < 4; j++) {
      const albumObj = {
        album_id: j,
        title: faker.lorem.words(),
        type: getGenre(),
        image_url: faker.internet.url(),
        artist_id: artistObj.artist_id,
      };
      albums.push(albumObj);

      for (let k = 0; k < 2; k++) {
        const songsObj = {
          title: faker.lorem.words(),
          album_id: albumObj.album_id,
          type: albumObj.type,
          featured_artists: null,
          image_url: albumObj.image_url,
          mp3_url: faker.internet.url(),
          duration: faker.random.number(),
          listens: faker.random.number(),
          explicit: faker.random.boolean(),
          artist_id: artistObj.artist_id,
        };

        songs.push(songsObj);
      }
    }
    artists.push(artistObj);
  }

  await csvWriterArtist.writeRecords(artists)
    .then(() => console.log('Artists Created'));

  await csvWriterAlbum.writeRecords(albums)
    .then(() => console.log('Albums Created'));

  await csvWriterSong.writeRecords(songs)
    .then(() => console.log('Songs Created'));
};

module.exports = generateData;