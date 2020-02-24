"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Catergories", "catergoryName", {
      type: Sequelize.STRING, //You need this too
      unique: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Catergories", "catergoryName", {
      type: Sequelize.STRING,
      unique: false
    });
  }
};
