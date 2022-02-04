require("../models/db");
const User = require("../models/user");
const Category = require("../models/category");
const Sheet = require("../models/sheet");
const bcrypt = require("bcryptjs");
const passport = require("passport");

exports.register_post = (req, res) => {
  User.findOne({ email: req.body.email }, async (err, userDoc) => {
    if (err) throw err;
    if (userDoc) {
      res.send("User already exists.");
    }
    if (!userDoc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        dateCreated: Date.now(),
      });

      await newUser.save();
      res.send("User created.");
    }
  });
};

exports.login_post = (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.send(user);
    });
  })(req, res, next);
};

exports.add_category = (req, res) => {
  Category.findOne(
    { title: req.body.title, createdBy: req.body.userId },
    async (err, categoryDoc) => {
      if (err) throw err;
      if (categoryDoc) {
        res.send("A category with the same name already exists.");
      }
      if (!categoryDoc) {
        const newCategory = new Category({
          title: req.body.title,
          slug: req.body.titleSlug,
          icon: req.body.icon,
          dateCreated: Date.now(),
          createdBy: req.body.userId,
        });

        await newCategory.save();
        res.send("New category created.");
      }
    }
  );
};

// exports.current_user_get = (req, res) => {
//   if (req.user) {
//     res.send({ name: req.user.name, id: req.user.id });
//   } else {
//     res.send(null);
//   }
// };

exports.current_user_get = (req, res) => {
  User.find({}, async (err, userDoc) => {
    if (err) throw err;
    if (userDoc) {
      res.json(userDoc);
    }
  });
};

exports.get_all_categories_from_user = (req, res) => {
  let userId = req.params.userId;

  Category.find({ createdBy: userId }, async (err, categories) => {
    if (err) throw err;
    if (categories) {
      res.send(categories);
    }
  });
};

exports.add_sheet = (req, res) => {
  let sheetId;

  // Save sheet
  Sheet.findOne(
    { slug: req.body.titleSlug, createdBy: req.body.userId },
    async (err, sheetDoc) => {
      if (err) throw err;
      if (sheetDoc) {
        res.send("A document with the same name already exists.");
      } else {
        const newSheet = new Sheet({
          title: req.body.title,
          slug: req.body.titleSlug,
          content: req.body.content,
          dateCreated: Date.now(),
          lastUpdated: Date.now(),
          category: req.body.category,
          createdBy: req.body.userId,
        });

        await newSheet.save();
        sheetId = newSheet._id;

        Category.findOne({ _id: req.body.category }, async (err, catDoc) => {
          if (err) throw err;
          if (catDoc) {
            catDoc.sheets.push(sheetId);
            await catDoc.save();
          }
        });
        res.send("New sheet saved.");
      }
    }
  );
};

exports.get_sheet = (req, res) => {
  let userId = req.params.userId;
  let sheetTitle = req.params.sheetTitle;

  Sheet.findOne({ createdBy: userId, slug: sheetTitle }, async (err, sheet) => {
    if (err) throw err;
    if (sheet) {
      res.send(sheet);
    }
  });
};


exports.get_category_by_id = (req, res) => {
  let userId = req.params.userId;
  let categoryId = req.params.categoryId;

  Category.findOne({ createdBy: userId, _id: categoryId }, async (err, sheet) => {
    if (err) throw err;
    if (sheet) {
      res.send(sheet);
    }
  });
};


exports.get_sheets_by_author = (req, res) => {
  let userId = req.params.userId;

  Sheet.find({ createdBy: userId }, async (err, sheets) => {
    if (err) throw err;
    if (sheets) {
      res.send(sheets);
    }
  });
};



exports.list = async (req, res) => {
  res.send("hello");
};
