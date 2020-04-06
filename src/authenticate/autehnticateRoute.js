import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';


function AutehnticateRoute ({component: Component, path, ...rest}) {
  const isLogIn = localStorage.getItem('isLogIn');
  // console.log('rest===>', rest);
  if (path === '/login') {
    return (
      <Route {...rest} path = {path} render = {(props) => {
        return !isLogIn ? <Component  {...props} /> : <Redirect to = '/home' />
      }} />
    );
  } else if (path === '/home') {
    return (
      <Route {...rest} path = {path} render = {(props) => {
        return isLogIn ? <Component {...props} /> : <Redirect to = '/login' />
      }} />
    );
  }
}

export default AutehnticateRoute;