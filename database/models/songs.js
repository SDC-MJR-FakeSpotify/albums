/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('songs', {
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    featured_artists: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mp3_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    listens: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    explicit: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    tableName: 'songs',
    schema: 'public',
    timestamps:false,
  });
};
