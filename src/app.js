// Simple starter application.
// It runs, but it is not finished.

// TODO: replace placeholder implementation
require('dotenv').config();
const APP_PORT = process.env.APP_PORT; // TODO: read this from environment config instead of hardcoding
console.log("port-",APP_PORT)

function main() {
  // TODO: replace placeholder implementation
  const message = `app is running on PORT ${APP_PORT}`;
  console.log(message);
  console.log("listening on port " + APP_PORT);
}

main();
