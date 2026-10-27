# FLEXI – Courier Services Web App (MERN)

React (Vite) + Node/Express + MongoDB (Compass)

## Setup
1. Install Node.js and MongoDB; open MongoDB Compass and connect to `mongodb://127.0.0.1:27017`.
2. Backend: `cd 25070521203/server && npm install && npm run dev` (http://localhost:5000)
3. Frontend: `cd 25070521203/client && npm install && npm run dev` (http://localhost:5173)
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

## Running
For development, run the server and client in separate terminals from the paths above. For a single server URL, build the client (`cd 25070521203/client && npm install && npm run build`) and start the backend (`cd 25070521203/server && npm install && npm start`).
