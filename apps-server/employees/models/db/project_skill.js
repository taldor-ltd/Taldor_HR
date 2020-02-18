/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectSkill', {
    projectId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'project_id'
    },
    skillId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'skill_id'
    }
  }, {
    tableName: 'project_skill',
    schema: 'hr',
    timestamps: false,
    freezeTableName: true
  });
};
