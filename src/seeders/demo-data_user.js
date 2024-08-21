'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Nguyen',
        lastName: 'Mark',
        email: 'admin@gmail.com',
        password: '123456',// password: từ plan text:123456 => hash password : *********
        andress: 'USA',
        gender: 1,
        typeRole: 'ROLE',
        keyRole: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  //hàm up dùng để thêm dữ liệu vào khi chạy bình thường ( không có lỗi gì )
  //khi bị lỗi thì sẽ rollback quay lại version trước khi bị lỗi và down sẽ chạy ở trường hợp này

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
