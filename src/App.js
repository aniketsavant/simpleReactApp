import React from 'react';
import './App.css';
import LoginComponent from './components/login/login';
import ParentHomeComponent from './components/home/parentHome';
import {
  Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AutehnticateRoute from './authenticate/autehnticateRoute';
import { createBrowserHistory } from "history";
 
const history = createBrowserHistory();

function App() {
  return (
    <Router history = {history}>
    <Switch>
      <Route path = "/" exact render = {() => <Redirect to = "/login" />} />
      <AutehnticateRoute path= "/login" exact component = {LoginComponent} />
      <AutehnticateRoute path = "/home" component = {ParentHomeComponent} />
      <Route>
        Page Not Found..!!
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
