import React from 'react';
import './App.css';
import Landingpage from './Landingpage';
import { Route,  Routes } from 'react-router-dom';
import Login from './comp/login/Login';
import Register from './comp/register/Register';






function App() {
  return (
    <div className="App ">
     <Routes>
      <Route path='/' element={<Landingpage />}/>
      <Route path='/signin' element={<Login />}/>
      <Route path='/signup' element={<Register />}/>


     </Routes>
    </div>
  );
}

export default App;
