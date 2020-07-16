const { Sequelize, DataTypes } = require('Sequelize');

// const sequelize = new Sequelize('postgres://localhost:5432/sdc');
const sequelize = new Sequelize('sdc', 'robinlifshitz', '', {
  dialect: 'postgres',
});

module.exports = { sequelize, DataTypes };
