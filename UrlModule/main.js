var http = require("http");
var url = require("url");

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