var express = require("express");
var router = express.Router();

router.get('/categories', function(req, res, next) {
    var type = req.query["type"] || null;
    var criteries = {};
    if (type) {
        criteries["type"] = type;
    }
    var categories = req.db.collection('categories');

    categories.find(criteries).toArray(function(err, docs) {
        var type = req.query["type"] || null;
        if (err) {
            throw err;
        }
        res.json(docs);
    });
});


module.exports = router;
