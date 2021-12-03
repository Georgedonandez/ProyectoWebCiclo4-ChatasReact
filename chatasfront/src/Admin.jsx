import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Navbar from './components/Admin/Navbardmin';

const auth = () => {

  const token = sessionStorage.getItem('token');

  if (token) {
    return true;
  }
  else {
    return false;
  }

}

const rol = () => {

  const rol = sessionStorage.getItem('rol');
  if (rol === 'ADMIN') {
    return true;
  }
  else {
    return false;
  }

}


function Admin() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default Admin
/*
import React from 'react';

import {BrowserRouter as Router,Route,Routes, Navigate} from 'react-router-dom'

import Navbar from './components/Admin/Navbardmin';
import Compras from './components/Admin/Comprasadmin';
import Produtos from './components/Admin/Productosadmin';
import Noticias from './components/Admin/Noticiasadmin';
import Usuarios from './components/Admin/Usuariosadmin';
import Actualizar from './components/Admin/Actualizar';



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
    return true;
  }
  else{
    return false;
  }

}

const validation = () => {

  if (!auth && !rol) {
    console.log([auth, rol]);
    return <Navigate to = '/'/>

  }


}

function Admin() {
  return (      
      <div>
          <Routes>
            <Route path = '/usuarios' component = {Usuarios}></Route>
            <Route path = '/actualizar' component = {Actualizar}></Route>
          </Routes>
        <Navbar></Navbar>
      </div>
    );
  }

export default Admin
*/
