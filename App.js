import express from "express";
import config from "config";
import http from "http";
import initRoutes from "./routes/Index.js";

const initApp = (done) => {
  const portNumber = config.get("port");
  const app = express();
  var httpServer = http.createServer(app);
  initRoutes(app);
  httpServer.listen(portNumber, done);
  return httpServer;
};

export default initApp;
