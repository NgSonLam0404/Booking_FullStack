'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
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
    Schedule.init({
        // không cần khai cột id
        currentNumber: DataTypes.INTEGER,
        maxNumber: DataTypes.INTEGER,
        lastName: DataTypes.STRING,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        doctorId: DataTypes.INTEGER,
        // tra doc datatypes của sequelize để biết các kiểu dữ liệu
        // chỉnh model Schedule xong thì qua chỉnh lại migrations của Schedule
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};