const express = require("express");
const router = express.Router();

const register_post = require("../controllers/auth");
const login_post = require("../controllers/auth");
const add_category = require("../controllers/auth");
const current_user_get = require("../controllers/auth");
const get_all_categories_from_user = require("../controllers/auth");
const add_sheet = require("../controllers/auth");
const get_sheet = require("../controllers/auth");
const get_category_by_id = require("../controllers/auth");
const get_sheets_by_author = require("../controllers/auth");

const test = require("../controllers/auth");

router.post("/api/register", register_post.register_post);
router.post("/api/login", login_post.login_post);
router.post("/api/add_category", add_category.add_category);
router.get(
  "/api/categories_from/:userId",
  get_all_categories_from_user.get_all_categories_from_user
);
router.get("/api/current_user", current_user_get.current_user_get);
router.post("/api/add_sheet", add_sheet.add_sheet);
router.get("/api/:userId/sheet/:sheetTitle", get_sheet.get_sheet);
router.get('/api/:userId/category/id/:categoryId', get_category_by_id.get_category_by_id);
router.get('/api/:userId/sheets_by_author', get_sheets_by_author.get_sheets_by_author);



router.get("/api/test", test.list);

module.exports = router;
