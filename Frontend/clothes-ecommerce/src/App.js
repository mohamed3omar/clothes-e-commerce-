import './App.css';
import React from "react";
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Route  , Routes} from 'react-router-dom';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home';
function App() {
  return (
     <>
          <Router>
              <Routes>
                  <Route  path="/" element={<Home/>} />
                  <Route  path='/Login' element ={<Login/>}/>
                  <Route  path="/Register" element ={<Register/>}/>
                  <Route  path="/admin" element ={<Dashboard/> }/>
              </Routes>
          </Router>
     </>
  );
}

export default App;


