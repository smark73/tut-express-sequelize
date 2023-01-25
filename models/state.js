'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.City, {
        foreignKey: 'state_id',
        sourceKey: 'state_id'
      });
    }
  }
  State.init({
    state_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};