const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');

const app = express();
const authenticatesRouter = require("./routes/authenticates");


dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


// app.use(
//     cors({
//         credentials: true,
//         origin: "http://localhost:3000"
//     })
// );

app.use("/authenticates", authenticatesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
