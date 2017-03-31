var app = require('express');
var db = require("../models");

// Create Router Object & middleware
var router = app.Router();


// Routers
router.get('/', function(req, res) {
  db.Burger.findAll({}).then((results) => {
    console.log(results);
    // res.render('home', quizzes);
  })
});

// // TEMPLATING && SCAFFOLDING EXAMPLE FOR USING AUTHENTICATION!!
// router.get('/test', function(req, res) {
//   // CASE 1: no user signed in
//   if (!req.user) {
//     res.render('authEx/any_one');
//   }
//   // CASE 2: user signed in that is admin
//   else if (req.user.isAdmin) {
//     res.render('authEx/admin_access_only', { user: req.user });
//   }
//   // CASE 3: user signed in not admin
//   else {
//     res.render('authEx/any_logged_user', { user: req.user });
//   }
// });
// module.exports = router;