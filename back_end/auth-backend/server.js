const express = require('express')
const authController = require('./auth.controller');
app= express();
const port = 3030;
const authR = require('./auth.routes');
app.use(express.json());


app.get('/auth', authR);




app.listen(port, ()=>
{
	console.log(`server is listen from the port: ${port}`);
})


model.export = router;

