var cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express"); //This returns a function, so express is a function. Indepth: this is the createApplication function
const app = express(); //This creates an object called app with methods like get.

var articleRouter = require("./routes/article");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Order of middle wear is important,
//Middleware are functions that have access to request & response object and next function (when invoked will execute the next middleware in sucession).
//You can use app.use to call a function, which is a middleware function. Just like any other function.
//app.use default's path is /. So if nothing is specified, it will run on every path.

app.use("/articles", articleRouter);

// Start server
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening`);
});

const Sequelize = require("sequelize");
const models = require("./models/index");
const Op = models.Sequelize.Op;

// console.log("hi");
// models.Article.create({
//   title: "Loren"
// }).then(newUser => {
//   console.log(
//     `New user ${newUser.title}, with id ${newUser.id} has been created.`
//   );
// });

// console.log("hi");
// models.Content.create({
//   body: "body33333",
//   articleId: "7a284770-bda3-46f1-8e06-196601136baf"
// }).then(newUser => {
//   console.log(
//     `New user ${newUser.title}, with id ${newUser.id} has been created.`
//   );
// });
x = async () => {
  let articleId = await models.Article.create({
    title: "title"
  })
    .then(cat => cat.dataValues)
    .catch(err => console.log(err));
  console.log(articleId);
  await models.Content.create({
    body: "body",
    articleId: articleId
  });
};

// x();
// models.Article.findAll({}).then(users => {
//   users.forEach(user => console.log(user.dataValues));
//   process.exit();
// });

models.Article.findAll({ include: [{ model: models.Content }] }).then(users => {
  users.forEach(user => console.log(user.dataValues));
  process.exit();
});

// models.Content.findAll({}).then(users => {
//   users.forEach(user => console.log(user.dataValues));
//   process.exit();
// });

// Sequelize.query("show tables").then(function(rows) {
//   console.log(JSON.stringify(rows));
// });

// models.Article.findOne({}).then(user => {
//   user.update({
//     title: "updated"
//   });
// });

// db.pets.update(newData, {where: { name: 'Max' } })
// .then(updatedMax => {
//   console.log(updatedMax)
// })
