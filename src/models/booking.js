'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
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
    Booking.init({
        // không cần khai cột id
        statusID: DataTypes.STRING,
        doctorId: DataTypes.INTEGER,
        patientid: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        // tra doc datatypes của sequelize để biết các kiểu dữ liệu
        // chỉnh model Booking xong thì qua chỉnh lại migrations của Booking
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};