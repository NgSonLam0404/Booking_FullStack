'use strict';
const {
    Model
} = require('sequelize');
const specialty = require('./specialty');
module.exports = (sequelize, DataTypes) => {
    class Doctor_Clinic_Specialty extends Model {
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
    Doctor_Clinic_Specialty.init({
        // không cần khai cột id
        doctorId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,
        specialtyId: DataTypes.INTEGER
        // tra doc datatypes của sequelize để biết các kiểu dữ liệu
        // chỉnh model Doctor_Clinic_Specialty xong thì qua chỉnh lại migrations của Doctor_Clinic_Specialty
    }, {
        sequelize,
        modelName: 'Doctor_Clinic_Specialty',
    });
    return Doctor_Clinic_Specialty;
};