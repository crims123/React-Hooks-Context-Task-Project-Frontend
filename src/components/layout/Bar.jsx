import React, { useContext } from 'react';
import UserContext from '../../context/users/userContext';

function Bar(props) {
  const { user, setLogOut } = useContext(UserContext);

  const handleClick = () => {
    setLogOut();
  }

  return (
    <header className="app-header">
      {user && (
        <p className="nombre-usuario">
          Welcome <span>{user.name}</span>{' '}
        </p>
      )}

      <nav className="nav-principal">
        <button onClick={handleClick} className="btn btn-blank cerrar-sesion">Log Out</button>
      </nav>
    </header>
  );
}

export default Bar;
