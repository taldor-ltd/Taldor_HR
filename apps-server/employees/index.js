/* eslint-disable prefer-template */
const { DataTypes } = require('sequelize');
require('./startup/config');
const db = require('./startup/db');


db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


// db.employee.findAll({
//   include: {
//     model: db.skill,
//   }
// }).then((e) => console.log('\n' + JSON.stringify(e)));


// db.employee.findAll({
//   include: {
//     model: db.user
//   }
// }).then((e) => console.log('\n' + JSON.stringify(e)));

// db.project.findAll({
//   include: {
//     model: db.skill
//   }
// }).then((e) => console.log('\n' + JSON.stringify(e)));

db.function('fn_user_get_login_details', ['admin']).then(([results, meta]) => console.log('\n' + JSON.stringify(results)));
