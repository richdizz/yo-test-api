var restify = require("restify");

function respond(req, res, next) {
  res.send("hello " + req.params.name);
  next();
}

const port = process.env.PORT || 8080;

var server = restify.createServer();
server.get("/hello/:name", respond);
server.head("/hello/:name", respond);

server.listen(port, function() {
  console.log("%s listening at %s", server.name, server.url);
});