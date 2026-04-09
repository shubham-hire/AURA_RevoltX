const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// REGISTER endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const usersFile = path.join(__dirname, 'users.json');

  let users = [];
  if (fs.existsSync(usersFile)) {
    users = JSON.parse(fs.readFileSync(usersFile));
  }

  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ username, password });
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  res.status(200).json({ message: 'Registration successful' });
});

// LOGIN endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const usersFile = path.join(__dirname, 'users.json');

  if (!fs.existsSync(usersFile)) {
    return res.status(401).json({ message: 'No users registered' });
  }

  const users = JSON.parse(fs.readFileSync(usersFile));
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));//added this line not was before
    return res.status(200).json({ message: 'Login successful' }); // added this line return
  } else {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2)); // added this line  was not before
    return res.status(401).json({ message: 'Invalid credentials' }); //Added this line return also was 401 before
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
