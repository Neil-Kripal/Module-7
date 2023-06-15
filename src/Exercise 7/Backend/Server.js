const express = require('express')
const bodyParser = require('body-parser')

var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());

// Array to store posts
let posts = [];

// API to retrieve all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// API to add a new post
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
