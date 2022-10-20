const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
})

app.get("/about", (req, res) => {
  return res.render("about", { title: "About" });
})

app.use("/blogs", require("./routes/blogs"));

app.use((req, res) => {
  return res.status(404).render("404");
})

module.exports = app;