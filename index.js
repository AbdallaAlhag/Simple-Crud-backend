const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Checking from the Node API");
});

mongoose
  .connect(
    "mongodb+srv://alhagabdalla:PtnuhtZuEJQKMyBN@backenddb.osasc4v.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Serving is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
