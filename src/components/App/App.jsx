import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Location from "../Location/Location";


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/localizacao" element={<Location />} /> {/* Rota para a página de Localização */}
      </Routes>
    </Router>
  );
}

export default App;

