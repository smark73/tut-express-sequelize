'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Branches', [
      // {
      //   company_id: 2,
      //   branch_name: 'Fake Branch',
      //   branch_address: '123 Fake St',
      //   branch_city: 'N Las Vegas',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      {
        company_id: 2,
        branch_name: 'Another Fake Branch',
        branch_address: '456 Fake St',
        branch_city: 'N Las Vegas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Branches', [{
      branch_name: 'Fake Branch'
    }])
  }
};
