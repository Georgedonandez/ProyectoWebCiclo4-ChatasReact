import React, { useState ,useEffect} from 'react'
import Button from '@mui/material/Button';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';

const Noticiasadmin = () => {
    return (
        <div>
            <h1>Noticias</h1>
                <div class="card">
                    <div class="card-header">
                        Lista de noticias
                    </div>
                    <div class="card-body">
                        <Button variant="contained" color="primary">
                        <InsertEmoticonTwoToneIcon /> &nbsp; Insertar Nueva noticia
                        </Button>
                        <br /><br />
                        <div class="table-responsive">
                            <table class="table table-bordered align-middle table-striped">
                                <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>Fuente</th>
                                        <th>Autor</th>
                                        <th>Link</th>
                                        <th>Título</th>
                                        <th>Descripción</th>
                                        <th>Acciones</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Directoalpaladar.com</td>
                                        <td>Pakus</td>
                                        <td>https://bit.ly/2ZOalrW</td>
                                        <td>Receta de carcamusas: la tradicional tapa de carne con tomate típica de Toledo </td>
                                        <td>Si habéis viajado a Toledo, seguro que habréis probado una de sus recetas más emblemáticas. Hoy os queremos enseñar a preparar la receta de carcamusas toledanas, la tradicional tapa de la capital de Castilla-La Mancha.</td>
                                        <td>
                                            <button type="button" class="btn btn-success">Editar</button> | 
                                            <button type="button" class="btn btn-danger">Eliminar</button>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>            

            
        </div>
    )
}

export default Noticiasadmin
/*
import React from 'react'

const Noticiasadmin = () => {
    return (
        <div>
            
        </div>
    )
}

export default Noticiasadmin
*/