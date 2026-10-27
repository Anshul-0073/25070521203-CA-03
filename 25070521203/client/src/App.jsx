import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Book from "./pages/Book.jsx";
import Track from "./pages/Track.jsx";
import Admin from "./pages/Admin.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <header className="nav">
        <h1 className="logo">FLEXI<span>.</span></h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/book">Book Courier</NavLink>
          <NavLink to="/track">Track</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/track" element={<Track />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} FLEXI Courier Services. Fast. Flexible. Reliable.</footer>
    </>
  );
}
