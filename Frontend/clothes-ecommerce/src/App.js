import './App.css';
import React from "react";
import {BrowserRouter as  Router, Routes, Route, Link} from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <div>
      <header className='App-header'>
              <Router>
                <Routes>
                  <Route exact path='/' element ={<Login/>}>
                  
                  </Route>
                  <Route path="/Register" element ={<Register/>}>
                  
                  </Route>
                </Routes>
              </Router>
      </header>
    </div>
  );
}

export default App;


