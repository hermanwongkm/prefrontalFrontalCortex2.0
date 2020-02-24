"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    //This maps model to the table itself
    "Article",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: DataTypes.DATE
    },
    {}
  );
  Article.associate = function(models) {
    Article.hasOne(models.Content, {
      foreignKey: "articleId"
    });

    Article.belongsToMany(models.Catergory, {
      through: "article_Catergory",
      foreignKey: "articleId"
      // otherKey: articleId
    });
  };
  return Article;
};
