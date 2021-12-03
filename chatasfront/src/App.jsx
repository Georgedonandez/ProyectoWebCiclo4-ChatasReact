import React from 'react';
import {BrowserRouter as Router,Route,Routes, Navigate} from 'react-router-dom'

import Admin from './Admin.jsx';
import Index from './Index.jsx';
import Productos from './components/Productos.jsx';
import Noticias from './components/Noticias.jsx';
import Contactos from './components/Contactos.jsx';

const auth = () => {

  const token = sessionStorage.getItem('token');

  if (token) {
    return true;
  }
  else{
    return false;
  }

}

const rol = () => {

  const rol = sessionStorage.getItem('rol');
  if (rol === 'ADMIN') {
    console.log(rol);
    return true;
  }
  else{
    return false;
  }

}

function ValidationRoute ({props}){

  return auth() && rol() ? <Admin/>:<Navigate to = '/'/>

}

function App() {
  return (
      <Router>
        <Routes>
          <Route path = '/admin' element = {
            <ValidationRoute>
              <Admin/>
            </ValidationRoute>            
          }>

          </Route>
        <Route path='/' element = {<Index />}></Route>
        <Route path ="/products" element={<Productos />}></Route>
        <Route path="/news" element={<Noticias />}></Route>
        {/*<Route path="/contactos" element={<Contactos />}></Route>*/}
      </Routes>
      </Router>
  );
}

export default App;
