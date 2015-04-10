var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/forecast', router);
};

router.get('/', function (req, res, next) {
    res.render('forecast');
});
