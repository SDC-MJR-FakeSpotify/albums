/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artists', {
    artists_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    unique_id: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'artists',
    schema: 'public',
    timestamps:false,

  });
};
