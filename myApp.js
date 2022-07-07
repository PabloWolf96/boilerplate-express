let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));
console.log("Hello World");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({ message: "HELLO WORLD" });
  }
  res.json({ message: "Hello json" });
});

module.exports = app;
