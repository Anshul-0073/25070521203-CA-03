import { useState } from "react";
import { trackShipment } from "../api.js";

const steps = ["Booked", "Picked Up", "In Transit", "Out for Delivery", "Delivered"];

export default function Track() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const search = async (e) => {
    e.preventDefault();
    setError("");
    setData(null);
    try {
      setData(await trackShipment(id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container narrow">
      <h3>Track Your Parcel</h3>
      <form onSubmit={search} className="row">
        <input placeholder="Enter tracking ID (e.g. FLX12345678xx)" value={id} onChange={(e) => setId(e.target.value)} required />
        <button className="btn">Track</button>
      </form>
      {error && <div className="alert err">{error}</div>}
      {data && (
        <div className="card">
          <p><b>{data.senderName}</b> → <b>{data.receiverName}</b> ({data.serviceType}, {data.weight} kg)</p>
          <p>{data.pickupAddress} → {data.deliveryAddress}</p>
          <ul className="steps">
            {steps.map((s, i) => (
              <li key={s} className={i <= steps.indexOf(data.status) ? "done" : ""}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
