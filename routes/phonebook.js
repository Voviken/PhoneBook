var express = require("express");
var router = express.Router();

router.get('/categories', function(req, res, next) {
    req["client"].get("http://localhost:3000/pb_api/categories", function(data, response) {
        res.render('category/categories', {
            categories: data
        });
    });
});

router.get('/editcateg/:id', function(req, res, next) {
    var id = req.params.id;
    var url = "http://localhost:3000/pb_api/categories/" + id;
    req["client"].get(url, function(data, response) {
        res.render('category/editcateg', {
            categ: data
        });
    });

});

module.exports = router;
