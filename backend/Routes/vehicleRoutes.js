const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

router.post("/location", async (req, res) => {
  try {
    const { busNumber, latitude, longitude } = req.body;

    const bus = await Vehicle.findOneAndUpdate(
      { busNumber },
      { latitude, longitude, updatedAt: new Date() },
      { new: true, upsert: true }
    );

    res.json(bus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/all", async (req, res) => {
  const buses = await Vehicle.find();
  res.json(buses);
});

module.exports = router;
{
  
}