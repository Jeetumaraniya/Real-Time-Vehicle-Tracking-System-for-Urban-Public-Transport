const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/vehicleTracking", {
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Mongo Error:", err.message));

app.use("/api", require("./routes/vehicleRoutes"));

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
