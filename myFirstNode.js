var http = require("http");
// var dt = require("./date");

// http //! get current time && module
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
//   })
//   .listen(8080);

// http //! request url
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(req.url);
//     res.end();
//   })
//   .listen(8080);

// var url = require("url");

// http //!  http://localhost:8080/?year=2017&month=July,April,May ===>> 2017, July
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

var fs = require("fs");

// http //! node js file system module
//   .createServer(function (req, res) {
//     fs.readFile("demoHTML.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

// http //! create 100 newfile(i).txt ;)
//   .createServer(function (res, req) {
//     for (let i = 0; i < 100; i++) {
//       fs.appendFile(`newfile${i}.txt`, "Hello content!", function (err) {
//         if (err) throw err;
//         console.log(Saved);
//       });
//     }
//   })
//   .listen(8080);


