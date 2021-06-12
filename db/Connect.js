import config from "config";
import mongoose from "mongoose";

function connect() {
  const dbConfig = config.get("database");

  if (!mongoose.connection.readyState) {
    return mongoose.connect(
      `mongodb+srv://${dbConfig.username}:${dbConfig.password}@cluster0.p6xd5.mongodb.net/${dbConfig.name}?retryWrites=true&w=majority`,
      {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
  }
}

export default connect;
