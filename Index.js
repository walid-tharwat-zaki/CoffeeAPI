import initApp from "./App.js";
import connectDB from "./db/Connect.js";

connectDB()
  .then((done) => {
    return initApp(done);
  })
  .catch((err) => {
    console.error("DB Connection failed : ", err);
  });
