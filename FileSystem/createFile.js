var http = require("http");
var fs = require("fs");

//* CREATE FILE

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

// http //! fs.open() takes a 'flag' as the second argument, if the flag is 'w' for 'writing' , the specified file is opened for writing. If the file doesn't exist , an empty file is created
//   .createServer(function (res, req) {
//     fs.open("demo.txt", "w", function (err) {
//       if (err) throw err;
//       console.log("saved");
//     });
//   })
//   .listen(8080);

http //! writeFile replaces specified file and content if it exists. If the file does not exist, a new file , containing the specified content will be created.
  .createServer(function (res, req) {
    fs.writeFile("demo.txt", "Hello Content!", function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  })
  .listen(8080);
