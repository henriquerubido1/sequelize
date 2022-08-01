require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
  {
    username: 'user1',
    title: 'post 1',
  },
  {
    username: 'user2',
    title: 'post 2',
  },
]

app.get('/post', (req, res) => {
  res.json(posts);
});

app.post('/login', (req, res) => {
  // authenticate user

  const username = req.body.username;

  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

  res.json({ accessToken });
});

app.listen(3000);