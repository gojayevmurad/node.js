//? fs.unlink()
var http = require("http");
var fs = require("fs");

http
  .createServer(function (res, req) {
    fs.unlink("myText.txt", function (err) {
      if (err) throw err;
      console.log("Deleted");
    });
  })
  .listen(8080);
