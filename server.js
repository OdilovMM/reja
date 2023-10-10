const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://xolmuroddb:9PUokzElWeejvXf1@cluster0.f1yzdjj.mongodb.net/REJAA";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 8080;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
