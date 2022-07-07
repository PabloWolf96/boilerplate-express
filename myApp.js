let express = require("express");
let app = express();
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
app.use("/public", express.static(__dirname + "/public"));
console.log("Hello World");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", (req, res) => {
  let response = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({ message: response.toUpperCase() });
  }
  res.json({ message: response });
});
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});
const handler = (req, res) => {
  res.json({ name: `${req.query.firstname} ${req.query.lastname}` });
};
app.route("/name").get(handler).post(handler);
module.exports = app;
