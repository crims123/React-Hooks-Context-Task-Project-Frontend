import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import UserContext from '../../context/users/userContext';

function Register(props) {
  const { alert, setAlert, setUser, authenticated } = useContext(UserContext);

  const [value, handleChange] = useInput({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  useEffect(() => {
    if (authenticated) {
      props.history.push('/projects');
    }
  }, [authenticated, props.history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = value;

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === ''
    ) {
      setAlert('All fields are required', 'alerta-error');
      return;
    }

    if (password.length < 6) {
      setAlert('The password must be at least 6 characters', 'alerta-error');
      return;
    }

    if (password !== confirm) {
      setAlert('Passwords are not the same', 'alerta-error');
      return;
    }
    setUser({ name, email, password });
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}> {alert.msg} </div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Register account</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Add Name"
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Add Email"
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Add Password"
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repeat your password"
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Register"
            />
          </div>
        </form>

        <Link to={'/'} className="enlace-cuenta">
          Return to Log In
        </Link>
      </div>
    </div>
  );
}

export default Register;
