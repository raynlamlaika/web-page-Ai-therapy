const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('./auth.controller');





router.post("/login", async (req,res) =>
{
	try {
		const { email, password } = req.body;
    		const user = await authController.signin(email, password);
		req.login(user, (err) => 
		{
			if (err) throw err;
			console.log(`user is loged in ${user.username}`);
			res.status(200).send({ message: `Welcome, ${user.username}!` });
		})

	}catch (error){
		console.error(`log-in error: ${error.message}`);
    		res.status(401).send({ message: error.message });
	}

})

router.get('/42', passport.authenticate('42'));
router.get('/42/callback',
  passport.authenticate('42', {
    failureRedirect: '/login-page' // Send them back to login on failure
  }),
  // This part runs *only* on success
  (req, res) => {
    // Passport has automatically created the session (req.user exists)
    console.log(`Logged in ${req.user.username} with 42`);
    res.redirect('/dashboard'); // Send them to your app's dashboard
  }
);






router.get('/logout', (req, res, next) => { // <-- add next here
  req.logout((err) => {
    if (err) { return next(err); } // Now 'next' is defined
    res.redirect('/');
  });
});

module.exports = router;





