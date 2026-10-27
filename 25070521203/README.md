# FLEXI – Courier Services Web App (MERN)

React (Vite) + Node/Express + MongoDB (Compass)

## Setup
1. Install Node.js and MongoDB; open MongoDB Compass and connect to `mongodb://127.0.0.1:27017`.
2. Backend:   `cd server && npm install && npm run dev`   (http://localhost:5000)
3. Frontend:  `cd client && npm install && npm run dev`   (http://localhost:5173)
4. In Compass, refresh: database **flexi** will appear with `shipments` and `messages` collections after your first booking / message.

## API
| Method | Endpoint | Purpose |
|---|---|---|
| POST | /api/shipments | Book a courier |
| GET | /api/shipments | List all (admin) |
| GET | /api/shipments/track/:trackingId | Track parcel |
| PATCH | /api/shipments/:id/status | Update status |
| DELETE | /api/shipments/:id | Delete |
| POST/GET | /api/contact | Contact messages |

## Frontend not showing?
Do NOT double-click client/index.html – React needs a server. Use one of:

**A) Development (two terminals)**
- Terminal 1: `cd server && npm install && npm run dev`
- Terminal 2: `cd client && npm install && npm run dev` → open **http://localhost:5173**

**B) Single URL (one server)**
- `cd client && npm install && npm run build`
- `cd ../server && npm install && npm start` → open **http://localhost:5000**
