"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Contents", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      articleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Articles", key: "id" } //This is used to set up a foreign key relationship
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Contents");
  }
};
