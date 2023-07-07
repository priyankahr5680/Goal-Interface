# Steps to start the server

- Install node and npm (in case if you haven't).
- Open terminal and navigate to the folder and execute below commands.
- `npm install`
- `./node_modules/.bin/mockserver -p 9009 -m mocks`
- That should start a mock server and should show as below.
- Mockserver serving mocks {verbose:true} under `mocks` at `http://localhost:9000`
- change the port number in case `9009` is already is in use or if there is any error.

# Now you can do following API calls:

- GET - `http://localhost:9009/goals` - gets all the goals
- POST - `http://localhost:9009/goals` - creates a goal
- DELETE - `http://localhost:9009/goals` - deletes a goal
