import React from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";

function Login() {
  const [value, handleChange] = useInput({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="form-usuario">
      {/* { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null } */}

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
