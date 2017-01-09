var express = require('express');
var router = express.Router();
//var mongodb = require('mongodb');

var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/recommendations', function(req, res) {
     //res.render('helloworld', { title: 'Hello, World!' });
     
    // Get the documents collection
    var collection = db.get().collection('recommendations');
    // Find all students
    collection.find({}).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else if (result.length) {
        res.render('recommendations',{
 
          // Pass the returned database documents to Jade
          "recos" : result
        });
      } else {
        res.send('No documents found');
      }
      });

});

module.exports = router;
