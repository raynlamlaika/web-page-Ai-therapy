// // server.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const dotenv = require('dotenv');
// const express = require('express');
// const app = express();
// const authentication = require('./routes/authRoutes');
// const Port = 6160;
// const connectDB = require('./database');
// dotenv.config();
// // Import the router

// connectDB();
// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true
//     },
//     password: {
//       type: String,
//       required: true
//     },
//     role: {
//       type: String,
//       enum: ['user', 'admin'],
//       default: 'user'
//     }
//   },
//   { timestamps: true }
// );



// dotenv.config();
// // Middleware
// app.use(express.json());
// app.use(logger);
// app.use('/', authentication);

// // Start server

// app.get("/login", (req, res) =>
// {
//     // here is the midelware where all of the works come out

//     res.send(` "req: GET" conecte to the ip in the port: ${Port}`);
// })


// function logger(req, res, next)
// {
//     console.log(`log-in`);
//     next();
// }


// app.listen(Port, () => {
//     console.log(`✅ Server running on http://localhost:${Port}`);
// });



const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6160;

// Connect to DB
connectDB();
console.log('🧩 Connecting to:', process.env.MONGO_URI);


// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
