var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/statechart', router);
};

router.get('/', function (req, res, next) {
    res.render('statechart');
});
