import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

// TODO -  estudar e fixar essas configurações
// video 4 20:00
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

const http = createServer(app); //Criando protocolo http
const io = new Server(http); //Criando protocolo ws (web socket)

io.on("connection", (socket: Socket) => {
  console.log("Se conectou ", socket.id);
});

app.use(express.json());

app.use(routes);

export { http, io };
