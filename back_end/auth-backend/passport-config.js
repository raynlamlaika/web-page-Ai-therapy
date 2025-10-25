const passport = require('passport')
const ftapi = require('passport-42').Strategy;
const auth = requre('./auth.controller');



passport.use(new FortyTwoStrategy(
{
  clientID: process.env.FORTYTWO_CLIENT_ID,
  clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/42/callback"
},

async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await auth.findOrCreateUser(profile);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}









