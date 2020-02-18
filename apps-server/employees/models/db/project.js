/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    projectId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'project_id'
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'project_name'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'end_date'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_active'
    }
  }, {
    tableName: 'project',
    schema: 'hr',
    timestamps: false,
    freezeTableName: true
  });
};
