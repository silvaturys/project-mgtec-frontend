import React from "react";
import { GOOGLE_MAPS_API_KEY } from "../../utils/api";
function Location() {
  // Endereço da loja: "CEP 88070730 Rua Humaitá 258"
  const address = encodeURIComponent("Rua Humaitá 258, CEP 88070730");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Onde Estamos</h2>
      <p>Visite nossa empresa no endereço abaixo:</p>

      {/* Google Maps Embed */}
      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          title="Localização da Empresa"
          width="100%"
          height="100%"
          style={{ border: "0", borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${address}`}
        ></iframe>
      </div>
    </div>
  );
}

export default Location;