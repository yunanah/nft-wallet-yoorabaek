const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(
  'mongodb+srv://admin:qwer1234@cluster0.yniez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  function (err, client) {
    if (err) {
      return console.log(err);
    }

    db = client.db('klipapp');

    app.listen(8080, function () {
      console.log('listening on 8080');
    });
  },
);

app.get('/friend', function (req, res) {
  db.collection('friend')
    .find()
    .toArray(function (error, result) {
      console.log(result);

      res.status(200).json(result);
    });
});

app.get('/wallet/token', function (req, res) {
  db.collection('token')
    .find()
    .toArray(function (error, result) {
      console.log(result);

      res.status(200).json(result);
    });
});

app.get('/wallet/card', function (req, res) {
  db.collection('card')
    .find()
    .toArray(function (error, result) {
      console.log(result);

      res.status(200).json(result);
    });
});
