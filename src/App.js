import React from 'react';
import './index.css';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  // Routes,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';

function App() {
  return (
    
    <Router>
    <Navbar/>
      <Switch>
      <Route path="/Home"><Home/></Route>
      <Route path="/About"><About/></Route>
      <Route path="/Service"><Service/></Route>
      <Route path="/Contact"><Contact/></Route>
      <Redirect to="/Home" />
      </Switch>
    </Router>
    
  
  );
}

export default App;
