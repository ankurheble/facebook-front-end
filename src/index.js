import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './components/Profile';
import Login from './components/Login';

ReactDOM.render(
  <Router>
    <React.Fragment>
        <Route exact path="/" component={App}/>
        <Route exact path="/user/profile" component={Profile}/>
        {/* <Route exact path="/auth/login" component={Login}/> */}
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
