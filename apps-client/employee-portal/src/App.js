import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/styles.css";
import "./assets/css/inspinia.css";
import "./assets/css/inspinia-tuning.css";
import   "./assets/css/animate.css";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {
  BrowserRouter as Router, Route, Link,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./components/_login/Login";
import Dashboard from "./components/_dashboard/Dashboard";
import ProfileContact from "./components/_profileContact/ProfileContact"
import AppRoute from './appRoute';
import { LoginLayout, MainLayout } from './templates/Layout';

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add("pace-done");
  }

  render() {
    return (
        <Router>
          <div className="App gray-bg">
            <Switch>
              <AppRoute exact path='/' component={Login} layout ={LoginLayout}/>
              <AppRoute path='/Dashboard' component={Dashboard} layout ={MainLayout}/>
              <AppRoute path='/ProfileContact' component={ProfileContact} layout ={MainLayout}/>
            </Switch>
          </div>
        </Router> 
    );
  }

}

export default App;