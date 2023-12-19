import React, { useState } from "react";

const AgregarConductor = ({ onAddConductor }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };

  const handleAgregarConductor = () => {
    // Validar los campos antes de agregar el conductor
    if (nombre.trim() === "" || edad.trim() === "") {
      alert("Por favor, introduce el nombre y la edad del conductor.");
      return;
    }

    // Llamar a la función para agregar el conductor
    onAddConductor({ nombre, edad });

    // Limpiar los campos después de agregar el conductor
    setNombre("");
    setEdad("");
  };

  return (
    <div className="form">
      <h2>Agregar Nuevo Conductor</h2>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>
      <div>
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          value={edad}
          onChange={handleEdadChange}
        />
      </div>
      <div>
        <button onClick={handleAgregarConductor}>Agregar Conductor</button>
      </div>
    </div>
  );
};

export default AgregarConductor;
