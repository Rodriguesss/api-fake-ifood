'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('items', 'storeId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'stores',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: null
      })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('items', 'storeId')
  }
};
