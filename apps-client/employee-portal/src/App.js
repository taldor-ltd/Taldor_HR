import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SideBar from "./templates/Sidebar";
import {
  BrowserRouter as Router, Route, Link,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./components/_login/Login";
import Dashboard from "./components/_dashboard/Dashboard";
import AppRoute from './appRoute';

import MainLayout from './templates/MainLayout'
import LoginLayout from './templates/LoginLayout'

class App extends React.Component {

  render() {

    return (
        <Router>
          <div className="App">
            <Switch>
              <AppRoute exact path='/' component={Login} layout ={LoginLayout}/>
              <AppRoute path='/Dashboard' component={Dashboard} layout ={MainLayout}/>
            </Switch>
          </div>
        </Router> 
    );
  }
}

export default App;