import React, { useState } from "react";

const ModalDelete = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    alert("Usuario eliminado");
    closeModal();
  };

  return (
    <div className="modal">
      <button onClick={openModal}>Eliminar Usuario</button>

      {isOpen && (
        <div className="modal-content">
          <h2>Confirmar eliminación</h2>
          <p>¿Estás seguro de que deseas eliminar al usuario actual?</p>
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={closeModal}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default ModalDelete;
