import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../context/users/userContext';

const PrivateRoute = ({ component: Component, ...props }) => {
  const { authenticated, setGetAuthenticatedUser, loadLogin } = useContext(UserContext);

  useEffect(() => {
    setGetAuthenticatedUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && loadLogin ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
