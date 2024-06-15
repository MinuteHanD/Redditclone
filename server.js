const express = require('express');
const mongoose = require('./database');
const user = require('./user');
const cors = require('cors');
app.use(cors());
const app = express();
app.use(express.json());

// Dummy data for submissions
const dummySubmissions = [
  {
    id: 1,
    title: 'First Submission',
    content: 'This is the first submission.',
    author: 'John Doe',
    upvotes: [],
    downvotes: [],
  },
  {
    id: 2,
    title: 'Second Submission',
    content: 'This is the second submission.',
    author: 'Jane Smith',
    upvotes: [],
    downvotes: [],
  },
  // Add more dummy submissions as needed
];

// GET /api/submissions route to fetch submissions
app.get('/api/submissions', (req, res) => {
  // If you have a database set up, you can fetch submissions from the database
  // and return them in the response
  // For now, we'll return the dummy data
  res.json(dummySubmissions);
});

// Register user (existing code)
app.post('/api/register', (req, res) => {
  const { username, password, email } = req.body;

  const newUser = new user({
    username,
    password,
    email,
  });

  newUser.save()
    .then(user => {
      res.status(201).json({ message: 'user registered successfully', user });
    })
    .catch(err => {
      console.error('error registering user:', err);
      res.status(500).json({ error: 'an error occurred while registering the user' });
    });
});

// Login user (existing code)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  user.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'user not found' });
      }

      if (user.password !== password) {
        return res.status(401).json({ error: 'invalid password' });
      }

      res.status(200).json({ message: 'login successful', user });
    })
    .catch(err => {
      console.error('Error logging in:', err);
      res.status(500).json({ error: 'an error occurred while logging in' });
    });
});

const port = 3001;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});