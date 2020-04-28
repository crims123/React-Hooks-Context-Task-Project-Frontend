import React, { useContext } from 'react';
import UserContext from '../../context/users/userContext';

function Bar() {
  const { user } = useContext(UserContext);
  return (
    <header className="app-header">
      {user && (
        <p className="nombre-usuario">
          Welcome <span>{user.name}</span>{' '}
        </p>
      )}

      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion">Log Out</button>
      </nav>
    </header>
  );
}

export default Bar;
