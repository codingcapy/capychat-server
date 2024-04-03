
/*
Author: Paul Kim
Date: February 14, 2024
Version: 1.0.0
Description: app for CapyChat server
 */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server as SocketServer } from "socket.io"
import http from "http"
import users from "./routes/users";
import user from "./routes/user";
import chats from "./routes/chats";
import messages from "./routes/messages";
import friends from "./routes/friends";
import comments from "./routes/comments";

dotenv.config();
const app = express();
const port = process.env.PORT || 3333;;

app.use(cors())
app.use(express.json())
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "https://codingcapy.github.io",
  },
});
io.on("connection", (socket) => {
  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(6),
    });
  });
  socket.on("friend", (body) => {
    socket.broadcast.emit("friend", {
      body,
      from: socket.id.slice(6),
    });
  });
  socket.on("chat", (body) => {
    socket.broadcast.emit("chat", {
      body,
      from: socket.id.slice(6),
    });
  });
});

app.get("/", (req, res) => res.send("welcome"))
app.use("/api/users", users);
app.use("/api/user", user);
app.use("/api/user/friends", friends);
app.use("/api/chats", chats);
app.use("/api/messages", messages);
app.use("/api/comments", comments);

server.listen(port, () => console.log(`Server listening on port: ${port}`))