const connection = require('../../database/database');
const Sequelize = require('sequelize');
const Store = require('./Store');
const date = require('../utils/dateFormatter');

const Item = connection.define('items', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  image_url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(255),
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

Item.belongsTo(Store, {
  constraints: true,
  foreingKey: 'storeId'
});

Store.hasMany(Item, {
  foreingKey: 'storeId',
  onDelete: 'CASCADE'
})

module.exports = Item;
