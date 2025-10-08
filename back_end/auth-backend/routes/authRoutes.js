const express = require('express');

const router = express.Router();


const Port = 6160;



router.get("/login", (req, res) =>
{

    res.send(` "req: GET" conecte to the ip in the port: ${Port}`);
})


router.post("/login", (req, res) =>
{

    res.send(` "req: POST" conecte to the ip in the port: ${Port}`);
})


router.put("/login", (req, res) =>
{

    res.send(` "req: PUT" conecte to the ip in the port: ${Port}`);
})


router.delete("/login", (req, res) =>
{

    res.send(` "req: DELETE" conecte to the ip in the port: ${Port}`);
})

module.exports = router;