import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import Home from './pages/Home' ;
 import Login from './pages/Login' ;
 import Register from './pages/Register' ;
 import Navbar from './components/Navbar' ;
 import Products from './pages/Products' ;
 import Services from './pages/Services' ;
  
import './App.css';

function App() {
  return (
    <Router>
      
     <Switch>
     <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/services">
          <Navbar />
            <Services />
          </Route>
          <Route path="/products">
          <Navbar />
            <Products />
          </Route>
          <Route path="/">
          <Navbar />
            <Home />
          </Route>
     </Switch>
     
   </Router>
  );
}

export default App;
