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
      // định danh mối quan hệ giữa các bảng
    }
  };
  User.init({
    // không cần khai cột id
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    andress: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    roleId: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    positionId: DataTypes.STRING,
    image: DataTypes.STRING,
    // tra doc datatypes của sequelize để biết các kiểu dữ liệu
    // chỉnh model user xong thì qua chỉnh lại migrations của user
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};