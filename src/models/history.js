'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
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
    History.init({
        // không cần khai cột id
        patientId: DataTypes.INTEGER,
        doctorId: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        files: DataTypes.TEXT
        // tra doc datatypes của sequelize để biết các kiểu dữ liệu
        // chỉnh model History xong thì qua chỉnh lại migrations của History
    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};