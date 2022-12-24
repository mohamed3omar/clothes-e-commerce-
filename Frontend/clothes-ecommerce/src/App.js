import './App.css';
import React from "react";
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Route  , Routes} from 'react-router-dom';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Navbar from './component/Navbar';
function App() {
  return (
     <>
          <Navbar/>
          <Router>
            <Routes>
                {/* <Route  path="/" element={} /> */}
                <Route  path='/Login' element ={<Login/>}/>
                <Route  path="/Register" element ={<Register/>}/>
                <Route  path="/admin" element ={<Dashboard/> }/>
            </Routes>
          </Router>
     </>
  );
}

export default App;


