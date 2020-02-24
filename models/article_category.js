"use strict";
module.exports = (sequelize, DataTypes) => {
  const article_Category = sequelize.define(
    "article_Category",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      categoryId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      articleId: {
        type: DataTypes.UUID,
        allowNull: false
      }
    },
    {}
  );
  article_Category.associate = function(models) {
    // associations can be defined here
  };
  return article_Category;
};
