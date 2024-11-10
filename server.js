const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

// Define the route handler function
function respond(req, res) {
  res.send("hello " + req.params.name);
}

// Define routes
app.get("/hello/:name", respond);

// Express does not have a direct equivalent for HEAD requests like Restify.
// However, you can easily define it using app.head
app.head("/hello/:name", (req, res) => {
  res.status(200).send();
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});