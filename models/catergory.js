"use strict";
module.exports = (sequelize, DataTypes) => {
  const Catergory = sequelize.define(
    "Catergory",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      catergoryName: DataTypes.STRING,
      description: DataTypes.STRING,
      color: DataTypes.STRING
    },
    {}
  );
  Catergory.associate = function(models) {
    Catergory.belongsToMany(models.Article, {
      through: "article_Catergory",
      foreignKey: "categoryId"
      // otherKey: articleId
    });
  };
  return Catergory;
};
