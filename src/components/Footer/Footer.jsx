import React from "react";

function Footer() {
  return (
    <footer id="contato" className="footer">
      <h2>Entre em Contato</h2>
      <ul>
        <li className="footer__email">
          📩 E-mail:{" "}
          <a href="mailto:contato@mgtecsolucoes.com.br">contato@mgtecsolucoes.com.br</a>
        </li>
        <li className="footer__whatsapp">
          📱 WhatsApp:{" "}
          <a
            href="https://wa.me/5548991069716"
            target="_blank"
            rel="noopener noreferrer"
          >
            (48) 9 9106-9719
          </a>
        </li>
        <li className="footer__instagram">
          📷 Instagram:{" "}
          <a
            href="https://instagram.com/mgtec_solucoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mgtec_solucoes
          </a>
        </li>
      </ul>
      <p>&copy; 2025 MGTEC - Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;