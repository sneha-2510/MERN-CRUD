import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/user.routes.js"

const app = express();
app.use(bodyParser.json());
dotenv.config(); // load the env configurations

const PORT = process.env.PORT || 7000;
const MONGODBURL = process.env.MONGODB_URL

//connect with db
mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log("DB connected successfully.")
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    });
  })
  .catch((err) => console.error(err));

app.use("/api", route);