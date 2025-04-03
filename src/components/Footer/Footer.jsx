import React from "react";

function Footer() {
  return (
    <footer id="contato">
      <h2>Entre em Contato</h2>
      <ul>
        <li>
          📩 E-mail:{" "}
          <a href="mailto:contato@mgtec.com.br">contato@mgtec.com.br</a>
        </li>
        <li>
          📱 WhatsApp:{" "}
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            (99) 99999-9999
          </a>
        </li>
        <li>
          📷 Instagram:{" "}
          <a
            href="https://instagram.com/mgtec"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mgtec
          </a>
        </li>
      </ul>
      <p>&copy; 2025 MGTEC - Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;