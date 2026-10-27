import { useState } from "react";
import { bookShipment } from "../api.js";

const empty = { senderName: "", senderPhone: "", receiverName: "", receiverPhone: "", pickupAddress: "", deliveryAddress: "", weight: 1, serviceType: "Standard" };

export default function Book() {
  const [form, setForm] = useState(empty);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setResult(await bookShipment(form));
      setForm(empty);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container narrow">
      <h3>Book a Courier</h3>
      {result && (
        <div className="alert ok">
          Booking confirmed! Tracking ID: <b>{result.trackingId}</b> · Amount: <b>₹{result.price}</b>
        </div>
      )}
      {error && <div className="alert err">{error}</div>}
      <form onSubmit={submit} className="form">
        <input name="senderName" placeholder="Sender name" value={form.senderName} onChange={set} required />
        <input name="senderPhone" placeholder="Sender phone" value={form.senderPhone} onChange={set} required />
        <input name="receiverName" placeholder="Receiver name" value={form.receiverName} onChange={set} required />
        <input name="receiverPhone" placeholder="Receiver phone" value={form.receiverPhone} onChange={set} required />
        <textarea name="pickupAddress" placeholder="Pickup address" value={form.pickupAddress} onChange={set} required />
        <textarea name="deliveryAddress" placeholder="Delivery address" value={form.deliveryAddress} onChange={set} required />
        <input name="weight" type="number" min="0.1" step="0.1" placeholder="Weight (kg)" value={form.weight} onChange={set} required />
        <select name="serviceType" value={form.serviceType} onChange={set}>
          <option>Standard</option>
          <option>Express</option>
          <option>Same-Day</option>
        </select>
        <button className="btn">Confirm Booking</button>
      </form>
    </div>
  );
}
