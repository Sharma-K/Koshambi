import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    
    <div className="App">
        
       <Routes>
       {loggedIn &&  <Route exact path='/home' element={<Home />}/> }
       <Route  path='/' element={<Login checkedLoggedIn={loggedIn} />}  />
      <Route  path='/Register' element={<Register/>}  />
      
 
  
      </Routes>
    </div>
    
    
  );
}

export default App;
