import React, {useState} from 'react'
import './sidebars.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import User from './Usuariosadmin.jsx'
import Product from './Productosadmin.jsx'
import Purchase from './Comprasadmin.jsx'
import News from './Noticiasadmin.jsx'
import Contactos from './Contactosadmin.jsx'

const Navbardmin = () => {

    const [valor, setValor] = useState(0);

    function seccion(){
        if (valor == 1) {
           
        }
        else if (valor == 2){
            return (<Contactos/>)
        }
        else if (valor == 3){
            return (<Product/>)
        }
        else if (valor == 4){
            return (<User/>)
        }
        else if (valor == 5){
            return (<News/>)
        }           
        else{
            return (<User/>)
        }
    }

    return (
        
        <>
        <div className='fluid-container'>    
            <main>
                <h1 class="visually-hidden">Sidebars examples</h1>

                <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                    <a href="/admin" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <img src="./assets/img/chatas/chatas2.jpeg" class="img-fluid rounded logo" alt="chatas" />
                        &nbsp;&nbsp;&nbsp;
                        <span class="fs-4">Chata's </span>
                    </a>
                    <hr />
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="/" class="nav-link" aria-current="page" onClick={(e) => setValor(1)}>
                                <i class="bi bi-house"></i> &nbsp;
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" class="nav-link text-white" onClick={(e) => setValor(2)}>
                                <i class="bi bi-table"></i> &nbsp;
                                Contactos
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" class="nav-link text-white" onClick={(e) => setValor(3)}>
                                <i class="bi bi-bag"></i> &nbsp;
                                Productos
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" class="nav-link text-white" onClick={(e) => setValor(4)}>
                                <i class="bi bi-people"></i> &nbsp;
                                Usuarios
                            </a>
                        </li>
                        <li>
                            <a href="#noticias" class="nav-link text-white" onClick={(e) => setValor(5)}>
                                <i class="bi bi-newspaper"></i> &nbsp;
                                Noticias
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div class="dropdown">
                        <a href="#page-top" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="./assets/img/chatas/chatasLogo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                            <strong>Options</strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>

                <div class="b-example-divider"></div>
                &nbsp;
                &nbsp;
                <div>
                    {seccion()}
                </div>
            </main>
        </div>

        </>
    )
}

export default Navbardmin

/*
import React, { useState } from 'react'
import './sidebars.css'
import {BrowserRouter as Router,Route,Navigate} from 'react-router-dom';

import User from './Usuariosadmin.jsx'
import Product from './Productosadmin.jsx'
import Purchase from './Comprasadmin.jsx'
import News from './Noticiasadmin.jsx'


const Navbardmin = () => {

    const [valor, setValor] = useState(0);

    function seccion(){
        if (valor == 1) {
            
        }
        else if (valor == 2){
            return (<Purchase/>)
        }
        else if (valor == 3){
            return (<Product/>)
        }
        else if (valor == 4){
            return (<User/>)
        }
        else if (valor == 5){
            return (<News/>)
        }
    }

    return (
        <>
            <main>
                <h1 class="visually-hidden">Sidebars examples</h1>

                <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                    <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <img src="./assets/img/chatas/chatas2.jpeg" class="img-fluid rounded logo" alt="chatas" />
                        &nbsp;&nbsp;&nbsp;
                        <span class="fs-4">Chata's </span>
                    </a>
                    <hr />
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link" aria-current="page" onClick={(e) => setValor(1)}>
                                <i class="bi bi-house"></i> &nbsp;
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white" onClick={(e) => setValor(2)}>
                                <i class="bi bi-table"></i> &nbsp;
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white" onClick={(e) => setValor(3)}>
                                <i class="bi bi-bag"></i> &nbsp;
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white" onClick={(e) => setValor(4)}>
                                <i class="bi bi-people"></i> &nbsp;
                                Customers
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white" onClick={(e) => setValor(5)}>
                                <i class="bi bi-newspaper"></i> &nbsp;
                                News
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div class="dropdown">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="./assets/img/chatas/chatasLogo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                            <strong>Opctions</strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>

                <div class="b-example-divider"></div>
                &nbsp;
                &nbsp;
                <div>
                    {seccion()}
                </div>
            </main>

        </>
    )
}

export default Navbardmin
*/