const router = require("express").Router();
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  try {
    res.status(201).json(await Message.create(req.body));
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
router.get("/", async (req, res) => res.json(await Message.find().sort({ createdAt: -1 })));

module.exports = router;
