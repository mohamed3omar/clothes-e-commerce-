import './App.css';
import React from "react";
import '@fontsource/roboto/700.css';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
        <>
          <Router>
            <Routes>
              <Route exact path='/Login' element ={<Login/>}/>
              <Route path="/Register" element ={<Register/>}/>
            </Routes>
          </Router>
        </>
  );
}

export default App;


