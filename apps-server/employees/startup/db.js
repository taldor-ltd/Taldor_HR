const { Sequelize } = require('sequelize');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const sequelize = new Sequelize(`postgres://${user}:${pass}@${host}`);

module.exports = sequelize;
