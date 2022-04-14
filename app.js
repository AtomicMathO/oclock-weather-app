require("dotenv").config();
const express = require("express");
const path = require("path")
const router = require("./app/router/router");
const PORT = process.env.PORT || 1337;

const app = express();

app.set("view engine", "ejs");
const pathToViews = path.resolve(__dirname, "./app/views");
app.set("views", pathToViews);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})

app.use(router);
