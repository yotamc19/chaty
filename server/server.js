import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});