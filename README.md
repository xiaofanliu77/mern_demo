# mern_demo

## Description

It is a social network for developers. The components include:

1. MongoDB database and setting up its connection using mongoose.
2. Allow users to register account with email and password. Generate and verify a user is already logged in using json web token.
3. Setting up profile schema as a MongoDB model. Get profile for the currently logged in user. Register a profile. See all profiles.
4. Send a post from a registered user. See other user's posts.
5. Future development: add functions to follow/unfollow a user; developers tab shows followed users at the top; like/unlike a comment.

## How to use

Run `npm run dev` to start front and back end at the same time, thanks to the convenient tool "concurrently".

## Package Used:

- [concurrently](https://www.npmjs.com/package/concurrently): Run multiple commands at the same time. Set up the scripts in `package.json`, use double quotes for each command. Then run all of them with one command.
- config
- express
- [express-validator](https://express-validator.github.io/docs/): Validate request body has necessary information and are in expected format.
- gravatar
- mongoose
- [nodemon](https://www.npmjs.com/package/nodemon): A tool that allows restarting the node application when file changes. Makes it easier in a development env.
- [request](https://www.npmjs.com/package/request?activeTab=readme): A simple tool to make HTTP calls. It has been deprecated in 2020. Use axios instead.
- bcryptjs
- jsonwebtoken:
- [axios](https://www.npmjs.com/package/axios): Promise based HTTP client for node.js
- [redux](https://react-redux.js.org/)
- redux-thunk
- redux-devtools-extension
- [react-router-dom](https://www.geeksforgeeks.org/what-is-react-router-dom/): An npm package that allows you to implement dynamic routing in a web app.
- react-redux
- moment: date and time library
- react-moment
- [uuid](https://www.npmjs.com/package/uuid): Generate a random UUID. We use v4 from uuid in this project.
- [prop-types](https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/): Part of React that checks the type of a component. Useful for debugging.

## Common issues:

1. On Mac Monterry or later, port 5000 is occupied by ControlCe (Control Center). We cannot use that port for development. To find out what's using a particular port, run `lsof -i tcp:5000` (check what's using port 5000). To stop ControlCe process, we need to turn off AirPlay Receive in Settings, under "Sharing". [Credit](https://developer.apple.com/forums/thread/682332)
2. Sometimes a crashed process would continue occupying a port. We can run the commond above to check, then run `kill -9 44475` to kill that process whose PID is 44475.
3. Usage of .gitignore. If certain files or path are added to .gitignore file after they have been pushed to the repo, they will not delete themselves automatically. We need to manually remove them by running `git rm -rf --cached`, then re-push.
4. To specify a port to run react, add `PORT=3006` before `react-scripts start` in `package.json` file.
5. Github API has changed and the request library has been deprecated. Use axios instead.
