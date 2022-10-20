const Blog = require("../models/Blog");

exports.index_get = async (req, res) => {
  try {
    const blogs = await Blog.getAll();
    return res.render("blogs", { title: "Blogs", blogs });
  } catch (err) {
    console.log(err.message);
    return res.status(500).render("404");
  }
};

exports.new_get = (req, res) => {
  return res.render("new", { title: "New Blog" });
};

exports.new_post = async (req, res) => {
  try {
    const { error, errors, data } = Blog.validate(req.body);
    if (error) {
      return res.status(400).render("404");
    }
    await Blog.set(data);
    return res.status(201).redirect("/blogs");
  } catch (err) {
    console.log(err.message);
    return res.status(500).render("404");
  }
};