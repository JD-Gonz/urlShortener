var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = process.env.URLSHORTENER_URI;

module.exports = {
  getUrl: function (link, cb) {
    getConnection(function(err, collection) {
      if (err) throw err;
      collection.find({shortUrl : link}, function (err, cursor) {
        if (err) throw err;
        cursor.toArray(cb);
      });
    });
  },
  
  addUrl: function (doc) {
    getConnection(function(err, collection) {
      if (err) throw err;
      collection.update({"longUrl": doc.longUrl}, doc, {upsert:true});
    });
  }
};

function getConnection(cb) {  
    MongoClient.connect(url, function (err, db) {
      if (err) console.log('Unable to connect to server. Error:', err);
      var collection = db.collection('pairs');
      cb(null, collection);
    });
}    



