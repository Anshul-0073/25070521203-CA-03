import { useState } from "react";
import { sendMessage } from "../api.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(form);
      setMsg("Thanks! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <div className="container narrow">
      <h3>Contact Us</h3>
      {msg && <div className="alert ok">{msg}</div>}
      <form onSubmit={submit} className="form">
        <input name="name" placeholder="Your name" value={form.name} onChange={set} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={set} required />
        <textarea name="message" placeholder="Your message" rows="5" value={form.message} onChange={set} required />
        <button className="btn">Send Message</button>
      </form>
    </div>
  );
}
