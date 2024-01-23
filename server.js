// server.js

// Importing the 'http' module to create an HTTP server.
const http = require('http');

// Importing the 'app' module from a file named 'app'.
const app = require('./app');

// Setting up the port number. It uses the environment variable 'PORT' if available, otherwise defaults to 3000.
const port = process.env.PORT || 3000;

// Creating an HTTP server by passing the 'app' (Express application) to 'http.createServer'.
const server = http.createServer(app);

// Making the server listen on the specified port.
server.listen(port);
