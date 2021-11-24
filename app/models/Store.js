const connection = require('../../database/database');
const Sequelize = require('sequelize');
const date = require('../utils/dateFormatter');

const Store = connection.define('stores', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  grade: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  segment: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  distance: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  delivery_time: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  delivery_price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  image_url: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  famous: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  champion: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  meal_ticket: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  open: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  banner_image: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: date.formatter()
  },
  updatedAt: {
    type: Sequelize.DATE
  },
}, {
  timestamps: false
});

module.exports = Store;
