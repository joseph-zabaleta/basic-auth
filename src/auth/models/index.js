'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const UsersModel = require('./users-model.js');

// NOTE: connected to sqlite::memory out of box for proof of life
// TODO: 
// connect postgres for local dev environment and prod
// handle SSL requirements
// connect with sqlite::memory for testing


// const DATABASE_URL = 'sqlite::memory';
const DATABASE_URL =  process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

module.exports = {
  sequelizeDatabase,
  UsersModel: UsersModel(sequelizeDatabase, DataTypes)
}