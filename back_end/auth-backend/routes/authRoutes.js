// const express = require('express');

// const router = express.Router();


// const Port = 6160;



// router.get("/login", (req, res) =>
// {

//     res.send(` "req: GET" conecte to the ip in the port: ${Port}`);
// })


// router.post("/login", (req, res) =>
// {

//     res.send(` "req: POST" conecte to the ip in the port: ${Port}`);
// })


// router.put("/login", (req, res) =>
// {

//     res.send(` "req: PUT" conecte to the ip in the port: ${Port}`);
// })


// router.delete("/login", (req, res) =>
// {

//     res.send(` "req: DELETE" conecte to the ip in the port: ${Port}`);
// })

// module.exports = router;




const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Register (Signup)
router.post('/signup', async (req, res) => {
    console.log("🟢 Signup route hit");
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ message: 'All fields required' });

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashed });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ message: `Welcome, ${user.username}!` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
