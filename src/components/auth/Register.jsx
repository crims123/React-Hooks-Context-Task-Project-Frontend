import React from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";

function Register() {
  const [value, handleChange] = useInput({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="form-usuario">
      {/* { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null } */}
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

        <Link to={"/"} className="enlace-cuenta">
          Return to Log In
        </Link>
      </div>
    </div>
  );
}

export default Register;
