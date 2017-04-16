const express           = require('express'),
      app               = express(),
      mongoose          = require('mongoose');

var   MongoClient       = require('mongodb').MongoClient,
      assert            = require('assert'),
      ObjectId          = require('mongodb').ObjectID,
      storeData         = [];

MongoClient.connect('mongodb://:.mlab.com:61890/starbucksapp', function(err, db) {
  assert.equal(null, err);
  findStores(db, function() {
    db.close();
  });
});

//render html
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/src'));


//find all stores from mongoDB and push to storeData array
var findStores = function(db, callback) {
  var cursor = db.collection('stores').find();
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      storeData.push(doc);
    } else {
       callback();
    }
  });
};

app.get('/', function(req,res) {
  res.render("index.html");
});

app.get('/stores', function(req,res) {
  res.json(storeData);
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Server launch detected");
})
