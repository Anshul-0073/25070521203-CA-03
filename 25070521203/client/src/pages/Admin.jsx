import { useEffect, useState } from "react";
import { deleteShipment, getShipments, updateStatus } from "../api.js";

const statuses = ["Booked", "Picked Up", "In Transit", "Out for Delivery", "Delivered"];

export default function Admin() {
  const [list, setList] = useState([]);
  const load = () => getShipments().then(setList).catch(console.error);
  useEffect(() => { load(); }, []);

  const change = async (id, status) => { await updateStatus(id, status); load(); };
  const remove = async (id) => { if (confirm("Delete this shipment?")) { await deleteShipment(id); load(); } };

  return (
    <div className="container">
      <h3>Admin – All Shipments ({list.length})</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Tracking ID</th><th>Sender</th><th>Receiver</th><th>Service</th><th>₹</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {list.map((s) => (
              <tr key={s._id}>
                <td>{s.trackingId}</td>
                <td>{s.senderName}</td>
                <td>{s.receiverName}</td>
                <td>{s.serviceType}</td>
                <td>{s.price}</td>
                <td>
                  <select value={s.status} onChange={(e) => change(s._id, e.target.value)}>
                    {statuses.map((x) => <option key={x}>{x}</option>)}
                  </select>
                </td>
                <td><button className="link" onClick={() => remove(s._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
