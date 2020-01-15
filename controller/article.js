const models = require("../models/index");

const getAllArticles = async (req, res) => {
  try {
    const posts = await models.Article.findAll({});
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllContent = async (req, res) => {
  try {
    const content = await models.Content.findAll({});
    return res.status(200).json(content);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createPost = async (req, res) => {
  let returnedResults = {};
  const { postTitle, post, date } = req.body;
  let article = await models.Article.create({
    title: postTitle,
    date: date
  })
    .then(article => article.dataValues) //this returns the id to articleId
    .catch(err => console.log(err));
  returnedResults.post = article;
  let content = await models.Content.create({
    body: post,
    articleId: article.id
  })
    .then(content => content.dataValues)
    .catch(err => console.log(err));
  returnedResults.postDetails = content;
  return res.status(200).json(returnedResults);
};

const updatePost = async (req, res) => {
  try {
    let { article, postId } = req.body;
    let content = await models.Content.findOne({
      where: {
        id: postId
      }
    });
    content = await content.update({
      body: article
    });
    return res.status(200).json(content);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    let article = await models.Article.findOne({
      where: {
        id: req.params.id
      }
    });
    article = article.destroy();
    return res.status(200).json(article);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllArticles,
  getAllContent,
  createPost,
  updatePost,
  deletePost
};
