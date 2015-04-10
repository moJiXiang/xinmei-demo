var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/relationchart', router);
};

router.get('/', function (req, res, next) {
    res.render('relationchart');
});
