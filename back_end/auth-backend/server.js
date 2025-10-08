// server.js
const express = require('express');
const app = express();

const Port = 6160;

// Import the router
const authentication = require('./routes/authRoutes');

// Middleware
app.use(express.json());
app.use(logger);
app.use('/', authentication);

// Start server

app.get("/login", (req, res) =>
{
    // here is the midelware where all of the works come out

    res.send(` "req: GET" conecte to the ip in the port: ${Port}`);
})


function logger(req, res, next)
{
    console.log(`log-in`);
    next();
}


app.listen(Port, () => {
    console.log(`✅ Server running on http://localhost:${Port}`);
});
