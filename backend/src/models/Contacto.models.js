const mongoose = require('mongoose')
const{Schema} = mongoose
const ContactSchema = new Schema({

    nombres: {type: String, required: [true, "Ingrese el nombre del contacto"]},
    apellidos: {type: String, required: [true, "Ingrese el email del contacto"]},
    email: {type: String, required: [true, "Ingrese el teléfono del contacto"]},
    telefono: {type: String, required: [true, "Ingrese el asunto del mensaje"]},
    intereses: {type: String, required: [true, "Ingrese el cuerpo del mensaje"]},
    status: {type:String, default:'Activo'},
    
})

module.exports = mongoose.model('contacto', ContactSchema)
