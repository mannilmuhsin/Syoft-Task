require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

// Import routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

// Parse JSON request body
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
