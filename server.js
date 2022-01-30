// const express = require("express");
// const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// // io.on("connection"),
// //   (socket) => {
// //     socket.emit("start", "Hello World");
// //   };

// io.on("connection", (socket) => {
//   console.log("a user connected");

// });

// server.listen(3000, () => {
//   console.log("Listening on port 3000");
// });

const io = require("socket.io")(2002);

io.on("connection", (socket) => {
  console.log("new USer");
  socket.emit("start", "Hello World");
});
