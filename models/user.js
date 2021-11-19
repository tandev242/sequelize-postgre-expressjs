'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    record: DataTypes.JSONB,
    username: {
      type: DataTypes.STRING,
      validate: {
        function(values) {
          if (values === null || values.length > 50) {
            throw new Error("username not must be greater than 50 characters");
          }
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};