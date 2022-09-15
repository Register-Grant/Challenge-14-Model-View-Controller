const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// const routes = require('./controllers');
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 8080;

const sequelizeConnection = require("./config/sequelizeConnection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const models = require("./models");

const sess = {
  secret: "How Bout Them Gators",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelizeConnection,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(routes);

require('./models');

app.listen(PORT, () => {
  console.log(`Application can hear you on ${PORT}`);
  sequelizeConnection.sync({ force: true }).then(() => require('./seeds')) //maybe change to false
});
