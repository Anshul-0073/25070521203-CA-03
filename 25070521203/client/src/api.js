const call = async (url, options = {}) => {
  const res = await fetch(url, { headers: { "Content-Type": "application/json" }, ...options });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Something went wrong");
  return data;
};

export const bookShipment = (body) => call("/api/shipments", { method: "POST", body: JSON.stringify(body) });
export const getShipments = () => call("/api/shipments");
export const trackShipment = (id) => call(`/api/shipments/track/${encodeURIComponent(id)}`);
export const updateStatus = (id, status) => call(`/api/shipments/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) });
export const deleteShipment = (id) => call(`/api/shipments/${id}`, { method: "DELETE" });
export const sendMessage = (body) => call("/api/contact", { method: "POST", body: JSON.stringify(body) });
