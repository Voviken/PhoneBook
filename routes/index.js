var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
        // var categories = req.db.collection('categories');
        // categories.find({}).toArray(function(err, docs) {
        //     res.end(JSON.stringify(docs));
        // });
        res.end("Hello");
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
