import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';


export default function Usuariosadmin() {

    const [empleados, setEmpleados] = useState([])

    
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [status, setStatus] = useState('');


    useEffect(() => {
        listarUsuarios();
    }, [])

    const listarUsuarios = async () => {
        const token = sessionStorage.getItem('token')
        const response = await Axios.get('/users/list-all', { headers: { 'autorizacion': token } });
        console.log(response.data);
        setEmpleados(response.data);

    }


    const search = async (id) => {
        const token = sessionStorage.getItem('token')
        const response = await Axios.get('/users/list_one/' + id, { headers: { 'autorizacion': token } });

        console.log(response.data);
        setId(response.data._id)
        setName(response.data.name)
        setSurname(response.data.surname)
        setEmail(response.data.email)
        setBirthdate(response.data.birthdate)
    }

    const actualizarUsuario = async (e) => {
        e.preventDefault()
        const idc = id
        console.log(idc);
        const user = {name, surname, email, password, birthdate };
        const token = sessionStorage.getItem('token')
        const response = await Axios.put('/users/update/' + idc, user, { headers: { 'autorizacion': token } });
        console.log(response.data);
        const mensaje = response.data.message
        if (mensaje == 'Usuario actualizado') {
            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            });
            window.location.href='/admin'
        } else {
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }
        listarUsuarios()

    }

    const register = async(e) =>{
        e.preventDefault();
        const user = {name, surname, email, password, birthdate};
        const response = await Axios.post('/users/register', user);
        const mensaje = response.data.message;
        if (mensaje !== 'Bienvenido') {
            Swal.fire({
              
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
                  })
        }else{
            Swal.fire({  
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const borrarUsuario = async (id) => {
        const token = sessionStorage.getItem('token')
        const response = await Axios.put('/users/delete/' + id, { headers: { 'autorizacion': token } });
        const mensaje = response.data.message;
        if(mensaje != 'Usuario elminado' ){
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            });
        }else{
            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            });
        }
        listarUsuarios()

    }

    return (
        <div>
            <h1>Usuarios</h1>
            <div class="card">
                <div class="card-header">
                    Lista de usuarios
                </div>
                <div class="card-body">
                    <Button variant="contained" color="primary" data-toggle="modal" data-target="#registerEmpleado">
                        <InsertEmoticonTwoToneIcon /> &nbsp; Insertar Nuevo usuario
                    </Button>
                    <br /><br />
                    <div class="table-responsive">
                        <table class="table table-bordered align-middle table-striped">
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Correo</th>
                                    <th>Fecha de nacimiento</th>
                                    <th>Acciones</th>
                                </tr>

                                {
                                    empleados.map((empleado, i) => (
                                        <tr key={empleado._id}>
                                            <td>{i + 1}</td>
                                            <td>{empleado.name}</td>
                                            <td>{empleado.surname}</td>
                                            <td>{empleado.email}</td>
                                            <td>{empleado.birthdate}</td>
                                            <td>
                                                <button onClick={(e) => search(empleado._id)} className="btn btn-success btn-block" data-toggle="modal" data-target="#editEmpleado">
                                                    Editar
                                                </button>
                                                |
                                                <button onClick={(e) => borrarUsuario(empleado._id)} className="btn btn-danger btn-block">
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="modal fade" id='editEmpleado'>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className='modal-title'>Editar Usuario</h5>
                            <button className='close' data-dismiss='modal'>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={actualizarUsuario}>
                                <div className="mb-3">
                                    <label for="nombre" className="form-label">Nombres:</label>
                                    <input type="text" className="form-control" id="nombreForm" autofocus='true' required onChange={(e) => setName(e.target.value)} value={name} />
                                </div>
                                <div className="mb-3">
                                    <label for="apellido" className="form-label">Apellidos:</label>
                                    <input type="text" className="form-control" id="apellidoForm" autofocus='true' required onChange={(e) => setSurname(e.target.value)} value={surname} />
                                </div>
                                <div className="mb-3">
                                    <label for="mail" className="form-label">Correo:</label>
                                    <input type="email" className="form-control" id="correoForm" autofocus='true' required onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="mb-3">
                                    <label for="contrasena" className="form-label">Contraseña:</label>
                                    <input type="password" className="form-control" id="constrasenaForm" required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="fecha" className="form-label">Fecha de naciemiento:</label>
                                    <input type="date" className="form-control" id="fechaForm" required onChange={(e) => setBirthdate(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-secondary">Actualizar</button>
                            </form>

                        </div>

                    </div>

                </div>

            </div>


            <div className="modal fade" id='registerEmpleado'>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className='modal-title'>Ingresar Usuario</h5>
                            <button className='close' data-dismiss='modal'>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={register}>
                                <div className="mb-3">
                                    <label for="nombre" className="form-label">Nombres:</label>
                                    <input type="text" className="form-control" id="nombreForm" autofocus='true' required onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="apellido" className="form-label">Apellidos:</label>
                                    <input type="text" className="form-control" id="apellidoForm" autofocus='true' required onChange={(e) => setSurname(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="mail" className="form-label">Correo:</label>
                                    <input type="email" className="form-control" id="correoForm" autofocus='true' required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="contrasena" className="form-label">Contraseña:</label>
                                    <input type="password" className="form-control" id="constrasenaForm" required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="fecha" className="form-label">Fecha de naciemiento:</label>
                                    <input type="date" className="form-control" id="fechaForm" required onChange={(e) => setBirthdate(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-secondary">Registrar</button>
                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
};

/*
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';


const Usuariosadmin = () => {

    const [empleados, setEmpleados] = useState([])

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [birthdate,setBirthdate] = useState('');

    useEffect(()=>{
        listarUsuarios();
    },[])

    const listarUsuarios = async() => {
        const token= sessionStorage.getItem('token')
        const response = await Axios.get('/users/list-all',{headers:{'autorizacion':token}});
        console.log(response.data);
        setEmpleados(response.data);

    }
    
    const borrarUsuario = async(id) => {
        const token= sessionStorage.getItem('token')
        const response = await Axios.put('/users/delete/'+id,{headers:{'autorizacion':token}});
        const mensaje = response.data.message;
        Swal.fire({  
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        });

    }

    return (
        <div>
            <h1>Usuarios</h1>
                <div class="card">
                    <div class="card-header">
                        Lista de usuarios
                    </div>
                    <div class="card-body">
                        <Button variant="contained" color="primary">
                        <InsertEmoticonTwoToneIcon /> &nbsp; Insertar Nuevo usuario
                        </Button>
                        <br /><br />
                        <div class="table-responsive">
                            <table class="table table-bordered align-middle table-striped">
                                <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Correo</th>
                                        <th>Fecha de nacimiento</th>
                                        <th>Ultima fecha de inicio</th>
                                        <th>Acciones</th>
                                    </tr>
                                    
                                        {
                                            empleados.map((empleado,i)=>(
                                                <tr key= {empleado._id}>
                                                    <td>{i+1}</td>
                                                    <td>{empleado.name}</td>
                                                    <td>{empleado.surname}</td>
                                                    <td>{empleado.email}</td>
                                                    <td>{empleado.birthdate}</td>
                                                    <td>{empleado.birthdate}</td>
                                                    <td>
                                                        <Link variant="outlined" color="secondary" to={'/actualizar/'+empleado._id}>
                                                        <SendIcon />Editar
                                                        </Link> | <Button variant="outlined" color="error" onClick={()=>borrarUsuario(empleado._id)}>
                                                        <DeleteIcon />Eliminar
                                                        </Button>   
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>      
        </div>
    )
};

export default Usuariosadmin
*/