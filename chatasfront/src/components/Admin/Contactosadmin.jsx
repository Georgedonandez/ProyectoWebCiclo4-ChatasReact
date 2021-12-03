import React, { useState ,useEffect} from 'react'
import Button from '@mui/material/Button';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';

const Contactosadmin = () => {
    return (
        <div>
            <h1>Contactos</h1>
                <div class="card">
                    <div class="card-header">
                        Lista de contactos
                    </div>
                    <div class="card-body">
                        <Button variant="contained" color="primary">
                        <InsertEmoticonTwoToneIcon /> &nbsp; Insertar Nuevo contacto
                        </Button>
                        <br /><br />
                        <div class="table-responsive">
                            <table class="table table-bordered align-middle table-striped">
                                <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>e-mail</th>
                                        <th>Teléfono</th>
                                        <th>Intereses</th>
                                        <th>Acciones</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Devora Dora</td>
                                        <td>Mayorga de Murillo</td>
                                        <td>devopsm@hotmail.com
                                        </td>
                                        <td>+57 321 0987 654</td>
                                        <td>Compradora habitual de murillo y lomo de cerdo. Tiene un blog donde publica recetas con estos dos productos. Vive en Tunja. </td>
                                        <td>Si habéis viajado a Toledo, seguro que habréis probado una de sus recetas más emblemáticas. Hoy os queremos enseñar a preparar la receta de carcamusas toledanas, la tradicional tapa de la capital de Castilla-La Mancha.</td>
                                            <button type="button" class="btn btn-success">Editar</button> | 
                                            <button type="button" class="btn btn-danger">Eliminar</button>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>            

            
        </div>
    )
}

export default Contactosadmin