import React from "react";

function Bar() {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Welcome <span>Cristian Pinto</span>{" "}
      </p>

      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion">Log Out</button>
      </nav>
    </header>
  );
}

export default Bar;
