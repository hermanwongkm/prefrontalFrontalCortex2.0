const models = require("../models/index");

const createCategory = async (req, res) => {
  let returnedResults = {};
  const { catergoryName, description, color } = req.body;
  let category = await models.Catergory.create({
    catergoryName,
    description,
    color
  })
    .then(category => category.dataValues)
    .catch(err => console.log(err));
  returnedResults.category = category;
  return res.status(200).json(returnedResults);
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await models.Catergory.findAll({});
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createCategory,
  getAllCategories
};
