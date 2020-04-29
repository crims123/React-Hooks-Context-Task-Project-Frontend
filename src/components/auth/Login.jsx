import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import UserContext from '../../context/users/userContext';

function Login(props) {
  const { authenticated, setGetLoginToken, alert } = useContext(UserContext);
  const [value, handleChange] = useInput({ email: "", password: "" });

  useEffect(() => {
    if (authenticated) {
      props.history.push('/projects');
    }
  }, [authenticated, props.history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGetLoginToken(value)
  };

  return (
    <div className="form-usuario">
      {alert ? ( <div className={`alerta ${alert.category}`}> {alert.msg} </div> )  : null }}

      <div className="contenedor-form sombra-dark">
        <h1>Log in</h1>

        <form onSubmit={handleSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Log in"
            />
          </div>
        </form>

        <Link to={"/register"} className="enlace-cuenta">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
