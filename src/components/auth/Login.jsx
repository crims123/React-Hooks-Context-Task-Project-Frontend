import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import UserContext from '../../context/users/userContext';

function Login(props) {
  const { authenticated, setGetLoginToken, alert } = useContext(UserContext);
  useEffect(() => {
    if (authenticated) {
      props.history.push('/projects');
    }
  }, [authenticated, props.history]);

  const [value, handleChange] = useInput({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGetLoginToken(value);
  };

  return (
    <div className="form-user">
      {alert ? (
        <div className={`alert ${alert.category}`}> {alert.msg} </div>
      ) : null}
      }
      <div className="container-form shadow-dark">
        <h1>Log in</h1>

        <form onSubmit={handleSubmit}>
          <div className="field-form">
            <label className="field-form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-auth"
              placeholder="Add Email"
              onChange={handleChange}
            />
          </div>

          <div className="field-form">
            <label className="field-form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-auth"
              placeholder="Add Password"
              onChange={handleChange}
            />
          </div>

          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Log in"
            />
          </div>
        </form>

        <Link to={'/register'} className="link-account">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
