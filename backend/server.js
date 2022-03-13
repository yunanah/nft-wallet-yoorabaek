const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');

app.use(bodyParser.json());

app.use(
  cors({
    origin: ['http://localhost:5500'],
    credentials: true,
  }),
);

app.use(
  session({
    secret: 'ras',
    resave: true,
    secure: false,
    saveUninitialized: false,
  }),
);

const kakao = {
  clientId: '69ce1e18cec4ba5d0bad4acb24bc7092',
  clientSecret: 'RF1iNFE7kwwl0kvavDe5jzjbdFVgMU4f',
  redirectUri: 'http://localhost:5500/auth/kakao/callback',
};

let db;

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
  res.header('Access-Control-Allow-Origin', '*');
  db.collection('friend')
    .find()
    .toArray(function (error, result) {
      console.log(result);

      res.status(200).json(result);
    });
});

app.get('/wallet/token', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  db.collection('token')
    .find()
    .toArray(function (error, result) {
      console.log(result);

      res.status(200).json(result);
    });
});

app.get('/wallet/card', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  db.collection('card')
    .find()
    .toArray(function (error, result) {
      console.log(result);

      res.status(200).json(result);
    });
});

app.get('/auth/kakao', (req, res) => {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientId}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname,profile_image,account_email,gender`;
  res.redirect(kakaoAuthURL);
});

let token;
// 코드 post로 받아서 access 토큰 요청하는 형식으로 수정하기
app.post('/auth/kakao/token', async (req, res) => {
  try {
    //access토큰을 받기 위한 코드
    if (!req.body.authorizationCode) {
      res.sendStatus(400).json({
        status: 'error',
        error: 'req body cannot be empty',
      });
      return;
    }
    let authorization_code = req.body.authorizationCode;
    console.log(req.body.authorizationCode);
    await axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${kakao.clientId}&redirect_uri=${kakao.redirectUri}&code=${authorization_code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then((result) => {
        console.log('data', result.data);
        // 토큰을 활용한 로직을 적어주면된다.
        token = result.data;
      });
  } catch (err) {
    console.log(err);
    return;
  }
  //access토큰을 받아서 사용자 정보를 알기 위해 쓰는 코드
  console.log('token1', token);
  res.status(200).json(token);
});

let user;
app.post('/auth/kakao/info', async (req, res) => {
  try {
    if (!req.body.accessToken) {
      res.sendStatus(400).json({
        status: 'error',
        error: 'req body cannot be empty',
      });
      return;
    }
    let access_token = req.body.accessToken;
    await axios
      .get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((result) => {
        user = result.data;
      });
  } catch (err) {
    console.log(err);
    return;
  }
  res.status(200).json(user);
});
