import React, { useState ,useEffect} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

const Actualizar = (props) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [birthdate,setBirthdate] = useState('');

    useEffect(()=>{
        search();
    },[])

    const search = async()=> {
        const id=props.match.params.id
        const token= sessionStorage.getItem('token')
        const response = await Axios.get('/users/list_one/'+id,{headers:{'autorizacion':token}});

        console.log(response.data);
        setName(response.data.name)
        setSurname(response.data.surname)
        setEmail(response.data.email)
        setBirthdate(response.data.birthdate)
    }

    const actualizarUsuario = async(e) => {
        e.preventDefault()
        const id=props.match.params.id
        const user = {name, surname, email, password, birthdate};
        const token= sessionStorage.getItem('token')
        const response = await Axios.put('/users/update/'+id,user,{headers:{'autorizacion':token}});
        console.log(response.data);
        if (response == 'Usuario actualizado') {
            Swal.fire({  
                icon: 'success',
                title: response,
                showConfirmButton: false,
                timer: 1500
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: response,
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    

    return (
        <div>
            <div className="row justify-content-md-center">
                <div className="card text-center col-4">
                    <div className="card-header">
                    Acualizar Datos
                    </div>
                    <div className="card-body">
                    <form onChange = {actualizarUsuario}>
                        <div className="mb-3">
                        <label for="nombre" className="form-label">Nombres:</label>
                        <input type="text" className="form-control" id="nombreForm" autofocus= 'true' required onChange = {(e) => setName(e.target.value)} value={name}/>
                        </div>
                        <div className="mb-3">
                        <label for="apellido" className="form-label">Apellidos:</label>
                        <input type="text" className="form-control" id="apellidoForm" autofocus= 'true' required onChange = {(e) => setSurname(e.target.value)} value={name}/>
                        </div>
                        <div className="mb-3">
                        <label for="mail" className="form-label">Correo:</label>
                        <input type="email" className="form-control" id="correoForm" autofocus= 'true' required onChange = {(e) => setEmail(e.target.value)} value={name}/>
                        </div>
                        <div className="mb-3">
                        <label for="contrasena" className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" id="constrasenaForm" required onChange = {(e) => setPassword(e.target.value)} value={name}/>
                        </div>
                        <div className="mb-3">
                        <label for="fecha" className="form-label">Fecha de naciemiento:</label>
                        <input type="date" className="form-control" id="fechaForm" required onChange = {(e) => setBirthdate(e.target.value)} value={name}/>
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
    )
}

export default Actualizar
