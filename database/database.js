const Sequelize = require('sequelize');
require('dotenv').config({
  path: process.env.NODE_ENV === "prod" ? ".env.production" : ".env"
})

let dialectOptions;

process.env.NODE_ENV === "prod" ? dialectOptions = {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
} : dialectOptions = {}

const connection = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DB,
  define: {
    timestamps: false,
  },
  dialectOptions,
  logging: false
});

module.exports = connection;
