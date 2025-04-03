import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Função para navegar para Home e depois rolar para a seção certa
  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // Se estiver na página de Localização, volta para Home primeiro
    }
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Pequeno delay para garantir que a página carregue antes de rolar
  };

  return (
    <header>
      <nav>
        <div className="logo">MGTEC</div>
        <ul>
          <li>
            <button onClick={() => handleNavigation("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("quem-somos")}>
              Quem Somos
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("contato")}>Contato</button>
          </li>
          <li>
            <Link to="/localizacao">Localização</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;