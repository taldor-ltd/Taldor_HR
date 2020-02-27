/* eslint-disable */
const { Sequelize } = require('sequelize');
require('sequelize-hierarchy')(Sequelize);

const sp = require('./db-stored-functions');

const db = {};


const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const sequelize = new Sequelize(`postgres://${user}:${pass}@${host}`, {
  define: {
    timestamps: false
  }
});

const fs = require('fs');

const files = fs.readdirSync('./models/db');
const models = [];
files.forEach((file) => {
  if (file.includes('.js')) {
    models.push(require(`../models/db/${file}`)); 
  }
});
// Initialize models
models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});
Object.keys(db).forEach((modelName) => {
  const model = db[modelName];
  const modelAttributes = model.rawAttributes;
  const modelAttributeKeys = Object.keys(modelAttributes);
  modelAttributeKeys.forEach((attribute) => {
    if (modelAttributes[attribute].references) {
      const linkData = modelAttributes[attribute].references;
      const refModelName = Object.keys(db).find(
        (m) => m === linkData.model
      );
      if (refModelName) {
        const refModel = db[refModelName];
        model.belongsTo(refModel, {
          foreignKey: attribute,
        });
      }
    }
  });
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.function = (fnName, ...args) => {
  let b = `select * from hr.${fnName}(`;

  if (!Array.isArray(args)) {
    // eslint-disable-next-line no-param-reassign
    args = [...args];
  }

  args.forEach((a) => {
    if (typeof a === 'string' || a instanceof String) {
      b += "'" + a + "'";
    } else {
      b += `${a}`;
    }
    b += ',';
  });

  const len = b.length;
  if (b.substr(len - 1, 1) === ',') {
    b = b.substring(0, len - 1);
  }
  b += ')';

  console.log(b);

  return db.sequelize.query(b);
};

db.sp = sp;
for (const i in db.sp) {
  db.sp[i] = db.function.bind(this, sp[i]);
}

module.exports = db;
