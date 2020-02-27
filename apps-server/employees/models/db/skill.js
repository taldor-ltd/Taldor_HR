/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill', {
    skillId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'skill_id'
    },
    parentSkillId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true,
      field: 'parentSkillId'
    },
    skillDesc: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'skill_desc'
    },
    skillLongDesc: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'skill_long_desc'
    },
    isTechnology: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_technology'
    },
    hierarchyLevel: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'hierarchyLevel'
    }
  }, {
    tableName: 'skill',
    schema: 'hr',
    timestamps: false,
    freezeTableName: true
  });
};
