let express = require("express");
let app = express();
console.log("Hello World");
app.get("/", () => {
  res.send("Hello Express");
});

module.exports = app;
