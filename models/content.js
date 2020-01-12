"use strict";
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define(
    "Content",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      articleId: {
        type: DataTypes.UUID,
        allowNull: false
      }
    },
    {}
  );
  Content.associate = function(models) {
    Content.belongsTo(models.Article, { foreignKey: "articleId" });
  };
  return Content;
};
