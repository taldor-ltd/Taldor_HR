/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    employeeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'employee_id'
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name'
    },
    recruitDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'recruit_date'
    },
    quitDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'quit_date'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_active'
    },
    cellPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'cell_phone_number'
    },
    officePhoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'office_phone_number'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'email'
    },
    todoFkJobTitle: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'todo_fk_job_title'
    }
  }, {
    tableName: 'employee',
    schema: 'hr',
    timestamps: false,
    freezeTableName: true
  });
};
