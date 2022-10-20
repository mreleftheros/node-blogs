const router = require("express").Router();
const { index_get, new_get, new_post, idParam_get, idParam_delete_get } = require("../controllers/blogs");

router.get("/", index_get);
router.get("/new", new_get);
router.post("/new", new_post);
router.get("/:id", idParam_get);
router.get("/:id/delete", idParam_delete_get);

module.exports = router;