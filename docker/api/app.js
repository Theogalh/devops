var cors = require("cors");

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.use(cors());

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "mysql"
// });

app.get("/", function(req, res) {
  console.log("GET / called");
  res.send("Epitech project : API in NodeJS");

  // connection.query("SELECT User FROM user", function(err, results, fields) {
  //   console.log(err);
  //   console.log(results); // results contains rows returned by server
  //   console.log(fields); // fields contains extra meta data about results, if available
  // });
});

app.listen(port);

console.log("API server started on: " + port);
