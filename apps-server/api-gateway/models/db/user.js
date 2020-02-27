/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    user_hash_password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user',
    schema: 'hr',
    timestamps: false,
    freezeTableName: true
  });
};
