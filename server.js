var express = require('express');
var shortid = require('shortid');
var urlRegex = require('url-regex');
var shortener = require('./shortener');
var path = require('path');
var app = express();

app.set('json spaces', 4);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/new/*', function(req, res) {
    var newUrls = {"error":"Wrong url format, make sure you have a valid protocol and real site."};
    if (urlRegex({exact: true}).test(req.params[0])) {
      newUrls = {
        "longUrl": req.params[0],
        "shortUrl": shortid.generate()
      };
      shortener.addUrl(newUrls);
    }
    res.json(newUrls);
});

app.get('/urls', function(req, res) {
    shortener.getAllUrl(function(err, data) {
      if (err) throw err;
      res.json(data);
  });
});

app.get('/*', function(req, res) {
  shortener.getUrl(req.params[0], function(err, data) {
    if (err) throw err;
    if (data[0] == undefined) {
      res.json({"Error":"This url is not valid."});
    } else {
      res.redirect(data[0].longUrl);
    }
  });
});

app.listen(process.env.PORT || 8080, function () {
  console.log('URL shortener app is listening');
});

