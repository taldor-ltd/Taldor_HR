/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lutSkillLevel', {
    skillLevelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'skill_level_id'
    },
    skillLevelDesc: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'skill_level_desc'
    }
  }, {
    tableName: 'lut_skill_level',
    schema: 'hr',
    timestamps: false,
    freezeTableName: true
  });
};
