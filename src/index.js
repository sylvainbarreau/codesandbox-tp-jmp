//ex 0:
console.log("javascript");
const myApp = require("simple-hello-world-example");
 
const msg = myApp.printMsg(); // print and return " Hello World! " 

// ex1:
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Bonjour tout le monde</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`PORT Listen At ${PORT}`);
});

//ex2
app.use('/dream',express.static('public'));

