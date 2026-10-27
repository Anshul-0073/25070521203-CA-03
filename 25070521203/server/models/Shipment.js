const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
  {
    trackingId: { type: String, unique: true },
    senderName: { type: String, required: true },
    senderPhone: { type: String, required: true },
    receiverName: { type: String, required: true },
    receiverPhone: { type: String, required: true },
    pickupAddress: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    weight: { type: Number, required: true, min: 0.1 },
    serviceType: { type: String, enum: ["Standard", "Express", "Same-Day"], default: "Standard" },
    price: Number,
    status: {
      type: String,
      enum: ["Booked", "Picked Up", "In Transit", "Out for Delivery", "Delivered"],
      default: "Booked",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shipment", shipmentSchema);
