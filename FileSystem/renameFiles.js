//? fs.rename()
var http = require("http");
var fs = require("fs");

http
  .createServer(function (res, req) {
    fs.rename("oldName.txt", "newname.txt", function (err) {
      if (err) throw err;
      console.log("File renamed!");
    });
  })
  .listen(8080);
