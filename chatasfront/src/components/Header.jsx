import React, { Fragment, useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';


const Header = () => {
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [birthdate,setBirthdate] = useState('');
    const [last_start_date,setLast_start_date] = useState('');

    const login = async(e) => {

        e.preventDefault();
        const user = {email, password};
        const response = await Axios.post('/users/login', user);
        console.log(response);
        const mensaje = response.data.message;
        if(mensaje!=='Bienvenido')
        {
            Swal.fire({
              
            icon: 'error',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
              });
        }
        else{

            const token = response.data.token;
            const name = response.data.name;
            const userId = response.data.id;
            const rol = response.data.rol;
            if (rol == 'ADMIN') {
                window.location.href='/admin' ;   
            }
            else {
                window.location.href='/';
            }
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('nombre', name);
            sessionStorage.setItem('idusuario', userId);
            sessionStorage.setItem('rol', rol);

            Swal.fire({  
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            });
        }
    } 

    const register = async(e) =>{
        e.preventDefault();
        const user = {name, surname, email, password, birthdate, last_start_date};
        const response = await Axios.post('/users/register', user);
        console.log(response);
        const mensaje = response.data.message;
        if (mensaje !== 'Bienvenido') {
            Swal.fire({
              
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
                  })
        }else{
            const token= response.data.token
            const name= response.data.name
            const userId=response.data.id
            sessionStorage.setItem('token',token)
            sessionStorage.setItem('nombre',name)
            sessionStorage.setItem('idusuario',userId)
            window.location.href='/'

            Swal.fire({  
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <Fragment>
            <nav
            className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top py-3"
            id="mainNav"
            >
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top"
                ><img src="./assets/img/chatas/chatas2.jpeg" className="img-fluid rounded logo" alt="chatas"
                /></a>
                <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#page-top">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Nuestros Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#noticias">Noticias</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about">Quienes Somos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact2">Contactanos</a>
                    </li>
                    
                    |
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#modal1" data-bs-toggle="modal" data-bs-target="#registroModal">Registrarse</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#modal2" data-bs-toggle="modal" data-bs-target="#loginModal">Iniciar sesión</a>
                    </li>
                    </ul>
                </ul>
                </div>
            </div>
            </nav>
            
            <div className="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="card text-center">
                    <div className="card-header">
                    Registro
                    </div>
                    <div className="card-body">
                    <form onSubmit = {register}>
                        <div className="mb-3">
                        <label for="nombre" className="form-label">Nombres:</label>
                        <input type="text" className="form-control" id="nombreForm" autofocus= 'true' required onChange = {(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                        <label for="apellido" className="form-label">Apellidos:</label>
                        <input type="text" className="form-control" id="apellidoForm" autofocus= 'true' required onChange = {(e) => setSurname(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                        <label for="mail" className="form-label">Correo:</label>
                        <input type="email" className="form-control" id="correoForm" autofocus= 'true' required onChange = {(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                        <label for="contrasena" className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" id="constrasenaForm" required onChange = {(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                        <label for="fecha" className="form-label">Fecha de naciemiento:</label>
                        <input type="date" className="form-control" id="fechaForm" required onChange = {(e) => setBirthdate(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-secondary">Registrar</button>
                    </form>
                    </div>
                    <div className="card-footer text-muted">
                    Ingresa tus datos
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="card text-center">
                    <div className="card-header">
                    Iniciar sesion
                    </div>
                    <div className="card-body">
                    <form onSubmit = {login}>
                        <div className="mb-3">
                        <label for="correo" className="form-label">Correo electrónico:</label>
                        <input type="email" className="form-control" autofocus='true' required id="correoForm" onChange = {(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                        <label for="contrasenaLogin" className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" required id="constrasenaLoginForm" onChange = {(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-secondary">Ingresar</button>
                    </form>
                    </div>
                    <div className="card-footer text-muted">
                    Ingresa tus datos
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div
                className="
                    row
                    gx-4 gx-lg-5
                    h-100
                    align-items-center
                    justify-content-center
                    text-center
                "
                >
                <div className="col-lg-8 align-self-end">
                    <h1 className="text-white font-weight-bold" id="portfolio">
                        <img src="./assets/img/chatas/fraseHeader.png" className="img-fluid" alt=""/>
                    </h1>
                    <hr className="divider" />
                </div>
                <div className="col-lg-8 align-self-baseline">
                    <a href="/products">
                        <img src="./assets/img/chatas/comprarCarrito.png" className="img-fluid" alt=""/>
                    </a>
                </div>
                </div>
            </div>
            </header>
        </Fragment>
    )
}

export default Header
