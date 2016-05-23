var express = require("express");
var router = express.Router();

router.get('/categories', function(req, res, next) {
    var type = req.query["type"] || null;
    var criterias = {};
    if (type) {
        criterias["type"] = type;
    }
    var categories = req.db.collection('categories');

    categories.find(criterias).toArray(function(err, docs) {
        var type = req.query["type"] || null;
        if (err) {
            throw err;
        }
        res.json(docs);
    });
});

router.get('/categories/:id', function(req, res, next) {
    var id = req.params.id;
    var categories = req.db.collection('categories');
    categories.findOne({category_id: id}, function(err, doc) {
        if (err) {
            throw err;
        }
        res.json(doc);
    });
});


module.exports = router;
