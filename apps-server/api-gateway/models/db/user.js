/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: 'user_name'
    },
    userHashPassword: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'user_hash_password'
    },
    employeeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true,
      field: 'employee_id'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_active'
    },
    createdUserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true,
      field: 'created_user_id'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_date'
    },
    updatedUserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true,
      field: 'updated_user_id'
    },
    updatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_date'
    }
  }, {
    tableName: 'user',
    schema: 'hr',
    timestamps: false,
    freezeTableName: true
  });
};
