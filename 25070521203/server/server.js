require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/shipments", require("./routes/shipments"));
app.use("/api/contact", require("./routes/contact"));
// Serve the built React app (run `npm run build` inside /client first)
const dist = path.join(__dirname, "../client/dist");
app.use(express.static(dist));
app.get("*", (req, res) => res.sendFile(path.join(dist, "index.html"), (err) => {
  if (err) res.status(200).send("API running. Frontend not built yet: run 'npm run build' in /client, or use 'npm run dev' in /client and open http://localhost:5173");
}));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => console.log(`Server on http://localhost:${process.env.PORT}`));
  })
  .catch((err) => console.error("MongoDB error:", err.message));
