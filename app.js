const http = require("http");
const express = require("express");
const app = express();
const mongodb = require("mongoose");
const routerIndex = require("./routers/index");
var bodyParser = require("body-parser");

mongodb.connect("mongodb://localhost/CrudApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongodb.connection;
db.on("error", () => {
  console.log("MongodB error");
});
// set the view engine to ejs
app.set("views", __dirname + "/views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/", routerIndex);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

http.createServer(app).listen(8080, () => {
  console.log(" Serveri eshte duke degjuar ne portin 8080");
});
