const router = require("express").Router();
const { index_get, new_get, new_post } = require("../controllers/blogs");

router.get("/", index_get);
router.get("/new", new_get);
router.post("/new", new_post);

module.exports = router;