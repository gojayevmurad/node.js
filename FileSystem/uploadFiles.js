//? fs.appendFile() fs.writeFile()

var http = require("http");
var fs = require("fs");

// http //!Append "This is my text." to the end of the file "newfile.txt":
//   .createServer(function (res, req) {
//     fs.appendFile("newfile.txt", " This is my text.", function (err) {
//       if (err) throw err;
//       console.log("Updated");
//     });
//   })
//   .listen(8080);

http //! replaces the specified file and content
  .createServer(function (res, req) {
    fs.writeFile("newfile.txt", "This is my text 2", function (err) {
      if (err) throw err;
      console.log("Replaced");
    });
  })
  .listen(8080);
