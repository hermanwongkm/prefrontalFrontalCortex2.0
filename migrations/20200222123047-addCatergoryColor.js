"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Catergories", "color", {
      type: Sequelize.STRING,
      defaultValue: "#939393"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Catergories", "color");
  }
};
