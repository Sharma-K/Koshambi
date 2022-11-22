import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    
    <div className="App">
       <Routes>
      <Route  path='/' element={<Login />}  />
      <Route  path='/Register' element={<Register/>}  />
 
  
      </Routes>
    </div>
    
    
  );
}

export default App;
