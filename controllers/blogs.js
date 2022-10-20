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

exports.idParam_get = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.getById(id);
    if (!blog) {
      return res.status(404).render("404");
    }

    return res.render("blog", { title: "hello", blog });
  } catch (err) {
    console.log(err.message);
    return res.status(500).render("404");
  }
};

exports.idParam_delete_get = async (req, res) => {
  try {
    const { id } = req.params;

    await Blog.deleteById(id);

    return res.redirect("/blogs");
  } catch (err) {
    console.log(err.message);
    return res.status(500).render("404");
  }
}