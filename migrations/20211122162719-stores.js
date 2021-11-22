'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stores', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      grade: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      segment: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      distance: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      delivery_time: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      delivery_price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      image_url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      open: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      banner_image: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    }, {
      charset: 'latin1'
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('stores');
  }
};
