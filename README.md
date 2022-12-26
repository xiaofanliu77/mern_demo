# mern_demo

## Description

It is a social network for developers. The components include:

## Package Used:

- concurrently
- config
- express
- [express-validator](https://express-validator.github.io/docs/): Validate request body has necessary information and are in expected format.
- gravatar
- mongoose
- nodemon
- request
- bcryptjs

## Common issues:

1. On Mac Monterry or later, port 5000 is occupied by ControlCe (Control Center). We cannot use that port for development. To find out what's using a particular port, run `lsof -i tcp:5000` (check what's using port 5000). To stop ControlCe process, we need to turn off AirPlay Receive in Settings, under "Sharing". [Credit](https://developer.apple.com/forums/thread/682332)
2. Sometimes a crashed process would continue occupying a port. We can run the commond above to check, then run `kill -9 44475` to kill that process whose PID is 44475.
