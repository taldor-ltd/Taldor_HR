
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('./startup/config');
const db = require('./startup/db');

const app = express();
const authenticatesRouter = require("./routes/authenticates");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


db.sequelize.authenticate()
  .then(() => {
    console.log('Connection to DB has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the db: ', err);
  });


app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
);

app.use("/authenticates", authenticatesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
