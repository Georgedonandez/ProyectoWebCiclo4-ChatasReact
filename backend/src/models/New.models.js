const mongoose = require('mongoose')

const{Schema} = mongoose

const NewSchema = new Schema({

    fuente: {type: String, require: [true, "Ingrese la fuebte de la noticia"]},
    autor: { type: String, require: [true, "Debe ingresar el autor de la noticia"] },
    link: { type: String, require: [true, "Debe ingresar el link de la noticia"] },
    titulo: { type: String, require: [true, "Debe ingresar el título de la noticia"] },
    descripción: { type: String, require: [true, "Debe ingresar la descripción de la noticia"] },
    status: {type:String, default:'Activo'},
    
})

module.exports = mongoose.model('noticia', NewSchema)