'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("alunos", { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

      },
      RA: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      curso: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable("alunos");


  }
};
