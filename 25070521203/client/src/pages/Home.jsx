import { Link } from "react-router-dom";

const services = [
  { name: "Standard", desc: "Economical delivery in 3–5 days.", price: "From ₹55" },
  { name: "Express", desc: "Priority delivery within 24–48 hours.", price: "From ₹105" },
  { name: "Same-Day", desc: "Picked up and delivered today in your city.", price: "From ₹190" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h2>Your parcels, delivered <em>flexibly</em>.</h2>
        <p>Book a pickup, pay transparent prices and track every parcel in real time.</p>
        <Link className="btn" to="/book">Book a Courier</Link>
        <Link className="btn ghost" to="/track">Track Parcel</Link>
      </section>
      <section className="container">
        <h3>Our Services</h3>
        <div className="grid">
          {services.map((s) => (
            <div className="card" key={s.name}>
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
              <strong>{s.price}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
