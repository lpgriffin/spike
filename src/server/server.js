import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import users from "./routes/api/users.js";
import { pass } from "./config/passport.js";
import { mongoURI } from "./config/keys.js";
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

const CONNECTION_URL = mongoURI;

app.use(passport.initialize());
pass(passport);
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  );
