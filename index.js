var cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express"); //This returns a function, so express is a function. Indepth: this is the createApplication function
const app = express(); //This creates an object called app with methods like get.
const admin = require("firebase-admin");
var articleRouter = require("./routes/article");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const serviceAccount = require("./config/firebaseAdmin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://occipitallobe-82925.firebaseio.com"
});

//Order of middle wear is important,
//Middleware are functions that have access to request & response object and next function (when invoked will execute the next middleware in sucession).
//You can use app.use to call a function, which is a middleware function. Just like any other function.
//app.use default's path is /. So if nothing is specified, it will run on every path.

function checkAuth(req, res, next) {
  if (req.headers.authorization) {
    admin
      .auth()
      .verifyIdToken(req.headers.authorization)
      .then(() => {
        next();
      })
      .catch(() => {
        res.status(403).send("Unauthorized");
      });
  } else {
    res.status(403).send("Unauthorized");
  }
}

app.use("/articles/private", checkAuth);

app.use("/articles", articleRouter);

// Start server
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening`);
});
