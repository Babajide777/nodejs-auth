require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/auth/user", require("./routes/auth"));

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (e) => {
    e
      ? console.log(`Error connecting to databse /n ${e}`)
      : console.log(`Successfully connected to the database`);
  }
);

app.listen("4000", () => {
  console.log(`Server started on port`);
});
