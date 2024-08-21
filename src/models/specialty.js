'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Specialty extends Model {
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
    Specialty.init({
        // không cần khai cột id
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        Image: DataTypes.STRING,
        // tra doc datatypes của sequelize để biết các kiểu dữ liệu
        // chỉnh model Specialty xong thì qua chỉnh lại migrations của Specialty
    }, {
        sequelize,
        modelName: 'Specialty',
    });
    return Specialty;
};