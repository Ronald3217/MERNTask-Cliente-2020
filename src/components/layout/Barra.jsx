import React from 'react';

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Ronald Villagran</span>
      </p>
      <div className="nav-principal">
        <a href="#!">Cerrar Sesion</a>
      </div>
    </header>
  );
};

export default Barra;
