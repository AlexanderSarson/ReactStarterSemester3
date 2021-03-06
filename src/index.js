import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import "./style.css"
import {AuthProvider} from "./contexts/AuthContext";
import {StateProvider} from "./contexts/StateContext";

const AppWithRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
ReactDOM.render(<StateProvider><AuthProvider><AppWithRouter /> </AuthProvider></StateProvider>, document.getElementById("root"));
