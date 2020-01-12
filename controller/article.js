const models = require("../models/index");

const getAllArticles = async (req, res) => {
  try {
    const posts = await models.Article.findAll({});
    return res.status(200).json({ ...posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllContent = async (req, res) => {
  try {
    const content = await models.Content.findAll({});
    return res.status(200).json({ ...content });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllArticles,
  getAllContent
};
