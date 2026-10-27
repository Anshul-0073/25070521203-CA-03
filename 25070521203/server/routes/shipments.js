const router = require("express").Router();
const Shipment = require("../models/Shipment");

const RATES = { Standard: { base: 40, perKg: 15 }, Express: { base: 80, perKg: 25 }, "Same-Day": { base: 150, perKg: 40 } };
const makeId = () => "FLX" + Date.now().toString().slice(-8) + Math.floor(Math.random() * 90 + 10);

// Create booking
router.post("/", async (req, res) => {
  try {
    const { serviceType = "Standard", weight } = req.body;
    const r = RATES[serviceType];
    if (!r) return res.status(400).json({ error: "Invalid service type" });
    const price = r.base + r.perKg * Number(weight);
    const shipment = await Shipment.create({ ...req.body, price, trackingId: makeId() });
    res.status(201).json(shipment);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// All shipments (admin)
router.get("/", async (req, res) => {
  res.json(await Shipment.find().sort({ createdAt: -1 }));
});

// Track by tracking ID
router.get("/track/:trackingId", async (req, res) => {
  const s = await Shipment.findOne({ trackingId: req.params.trackingId.trim().toUpperCase() });
  if (!s) return res.status(404).json({ error: "Tracking ID not found" });
  res.json(s);
});

// Update status
router.patch("/:id/status", async (req, res) => {
  try {
    const s = await Shipment.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true, runValidators: true });
    res.json(s);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  await Shipment.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
