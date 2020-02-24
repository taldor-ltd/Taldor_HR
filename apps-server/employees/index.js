/* eslint-disable max-len */
/* eslint-disable prefer-template */
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

// db.function('fn_user_get_login_details', 'admin').then(([results, meta]) => console.log('\n' + JSON.stringify(results)));

const userName = 'admin';

db.sp.userGetLoginDetails(userName).then(([[user], metaData]) => console.log('\n' + JSON.stringify(user)));


// db.user.findAll({
//   where: {
//     userId: 1
//   }
// }).then((result) => {
//   console.log('\n\n\n\n');
//   console.log(JSON.stringify(result));
// });
