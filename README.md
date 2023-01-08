# mern_demo

## Description

It is a social network for developers. The components include:

1. MongoDB database and setting up its connection using mongoose.
2. Allow users to register account with email and password. Generate and verify a user is already logged in using json web token.
3. Setting up profile schema as a MongoDB model. Get profile for the currently logged in user. Register a profile. Get all profiles

## Package Used:

- concurrently
- config
- express
- [express-validator](https://express-validator.github.io/docs/): Validate request body has necessary information and are in expected format.
- gravatar
- mongoose
- [nodemon](https://www.npmjs.com/package/nodemon): A tool that allows restarting the node application when file changes. Makes it easier in a development env.
- [request](https://www.npmjs.com/package/request?activeTab=readme): A simple tool to make HTTP calls. It has been deprecated in 2020.
- bcryptjs
- jsonwebtoken:

## Common issues:

1. On Mac Monterry or later, port 5000 is occupied by ControlCe (Control Center). We cannot use that port for development. To find out what's using a particular port, run `lsof -i tcp:5000` (check what's using port 5000). To stop ControlCe process, we need to turn off AirPlay Receive in Settings, under "Sharing". [Credit](https://developer.apple.com/forums/thread/682332)
2. Sometimes a crashed process would continue occupying a port. We can run the commond above to check, then run `kill -9 44475` to kill that process whose PID is 44475.
