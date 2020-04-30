import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import UserContext from '../../context/users/userContext';

function Register(props) {
  const { alert, setAddAlert, setAddUser, authenticated } = useContext(
    UserContext
  );
  useEffect(() => {
    if (authenticated) {
      props.history.push('/projects');
    }
  }, [authenticated, props.history]);

  const [value, handleChange] = useInput({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = value;

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === ''
    ) {
      setAddAlert('All fields are required', 'alert-error');
      return;
    }

    if (password.length < 6) {
      setAddAlert('The password must be at least 6 characters', 'alert-error');
      return;
    }

    if (password !== confirm) {
      setAddAlert('Passwords are not the same', 'alert-error');
      return;
    }
    setAddUser({ name, email, password });
  };

  return (
    <div className="form-user">
      {alert ? (
        <div className={`alert ${alert.category}`}> {alert.msg} </div>
      ) : null}
      <div className="container-form shadow-dark">
        <h1>Register account</h1>

        <form onSubmit={handleSubmit}>
          <div className="field-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Add Name"
              onChange={handleChange}
            />
          </div>

          <div className="field-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Add Email"
              onChange={handleChange}
            />
          </div>

          <div className="field-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Add Password"
              onChange={handleChange}
            />
          </div>

          <div className="field-form">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repeat your password"
              onChange={handleChange}
            />
          </div>

          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Register"
            />
          </div>
        </form>

        <Link to={'/'} className="link-account">
          Return to Log In
        </Link>
      </div>
    </div>
  );
}

export default Register;
