import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Location from "../Location/Location";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/localizacao" element={<Location />} /> {/* Rota para a página de Localização */}
      </Routes>
    </Router>
  );
}

export default App;

