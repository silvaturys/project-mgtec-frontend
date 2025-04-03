import React from "react";

function Location() {
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
          src={`https://www.google.com/maps/embed/v1/place?key=SUA_CHAVE_API&q=Rua+Exemplo,123,São+Paulo`}
        ></iframe>
      </div>
    </div>
  );
}

export default Location;