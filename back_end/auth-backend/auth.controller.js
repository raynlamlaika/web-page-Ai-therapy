const bcrypt = require('bcryptjs')



const db = {
	id : 1,
	username : "Name",
	email : "Name@gmail.com",
	hashedpassword : "1212121212!@"
	
}


async function signin(email, password)
{
	console.log(`passing in check sign-in`);
	const user = db.users[email];

	if (!user){
		throw new Error('User name is empty or not Fond.');
	}
	
	const isPasswordCorrect = await bcrypt.compare(password, user.hashedpassword);
	if (!isPasswordCorrect)
	{
		throw new Error('invalid password');
	}
	return{
    	id: user.id,
    	username: user.username,
    	email: user.email
	};
}

async function findOrCreateUser(profile)
{

	let user = db.user[profile.id];
	if(user)
	{
		//singin for thr usr al ready exist
		console.log(`user loging with user name: ${user.username}`);
		return user;
	}
	else
	{
		//creat table user
		console.log('Creating new 42 user:', profile.username);
		const newUser = 
		{
     			id: profile.id,
      			username: profile.username,
     	 		email: profile.emails[0].value,
   	   		hashedpassword: null
    		};
	}
	db.user[profile.id] = newUser;
	


}


async function findUserById(id) {
  const user = db.users[id];
  if (!user) {
    throw new Error('User not found for session.');
  }
  return user;
}


model.export = {singin, findUserById, findOrCreateUser};

