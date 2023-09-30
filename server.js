const http = require("http");
const mongodb = require("mongodb");
// const app = require("./app");

const connectionString =
  "mongodb+srv://xolmuroddb:F7x3AqfsD44xuRv1@cluster0.f1yzdjj.mongodb.net/REJAA";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("Successfully connected to MongoDB");
      console.log(client);
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
