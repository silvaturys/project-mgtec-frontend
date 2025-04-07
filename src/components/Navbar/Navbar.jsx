import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setMenuOpen(false); // Fecha o menu após clicar
  };

  return (
    <nav className="NavBar">
     <button
  className="NavBar__hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>
      <ul className={`NavBar__menu ${menuOpen ? "open" : ""}`}>
        <li>
          <button className="NavBar__button" onClick={() => handleNavigation("home")}>Home</button>
        </li>
        <li>
          <button className="NavBar__button" onClick={() => handleNavigation("quem-somos")}>Quem Somos</button>
        </li>
        <li>
          <button className="NavBar__button" onClick={() => handleNavigation("contato")}>Contato</button>
        </li>
        <li>
          <Link className="NavBar__button" to="/localizacao">Localização</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;