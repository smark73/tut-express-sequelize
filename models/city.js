'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.State, {
        foreignKey: 'state_id',
        targetKey: 'state_id'
      });
    }
  }
  City.init({
    state_id: DataTypes.STRING,
    city_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });

  return City;
};