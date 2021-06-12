import express from "express";
import machines from "./coffee/Machines.js";
import pods from "./coffee/Pods.js";
import home from "./Home.js";

function initRoutes(app) {
  app.use(
    express.json({
      verify: (req, res, buf, encoding) => {
        if (buf && buf.length) {
          req.rawBody = buf.toString(encoding || "utf8");
        }
      },
      type: "application/json",
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.use("/", home);

  app.use("/api/coffee/machines", machines);
  app.use("/api/coffee/pods", pods);

  app.use((req, res, next) => {
    return res.status(404).send({ error: "Route not found" });
  });
  app.use(function (err, req, res, next) {
    return res.status(500).send({ error: err });
  });
}

export default initRoutes;
