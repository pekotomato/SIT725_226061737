var express = require("express");
const path = require("path");

var app = express();
var port = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, "public")));

app.get("/square", (req, res) => {
  const num = parseFloat(req.query.num);

  if (isNaN(num)) {
    return res.send("Error: Please provide a valid number.");
  }

  const square = num * num;
  res.send(`The square of ${num} is: ${square}`);
});

app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.send("Error: Please provide valid numbers.");
  }

  res.send(`The sum of ${a} and ${b} is: ${a + b}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});