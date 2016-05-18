var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

router.get('/question', quizController.question);
router.get('/check', quizController.check);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/author', function(req, res, next) {
  res.render('../views/author.ejs', {title: 'Quiz'});
});

//router.get('/question', function(req, res, next) {
  //res.render('../views/layout.ejs');
//});


//router.get('/question', quizController.question);
//router.get('/check', quizController.check);

module.exports = router;
