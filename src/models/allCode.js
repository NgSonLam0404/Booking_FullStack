'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
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
    Allcode.init({
        // không cần khai cột id vì Sequelize tự động tạo
        key: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING,
        // kiểm tra kiểu dữ liệu của các trường trong Sequelize
    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};
