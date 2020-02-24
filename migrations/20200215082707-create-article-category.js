"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("article_Categories", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      categoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Catergories", key: "id" }, //This is used to set up a foreign key relationship
        onDelete: "CASCADE"
      },
      articleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Articles", key: "id" }, //This is used to set up a foreign key relationship
        onDelete: "CASCADE"
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
    return queryInterface.dropTable("article_Categories");
  }
};
