import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import './App.css'

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path="*"
            element={<Navigate to="/home" replace />}
        />

        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
