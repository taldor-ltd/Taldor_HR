/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeSkill', {
    employeeSkillId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'employee_skill_id'
    },
    employeeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'employee_id'
    },
    skillId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'skill_id'
    },
    skillLevelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'skill_level_id'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_active'
    },
    createdUserId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'created_user_id'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
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
    tableName: 'employee_skill',
    schema: 'hr',
    timestamps: false,
    freezeTableName: true
  });
};
