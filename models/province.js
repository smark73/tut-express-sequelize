'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Province.init({
    prov_code: DataTypes.STRING,
    prov_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Province',
  });
  Province.associate = function(models) {
    Province.hasMany(models.City, {
      foreignKey: 'prov_code',
      sourceKey: 'prov_code'
    });
  };
  return Province;
};