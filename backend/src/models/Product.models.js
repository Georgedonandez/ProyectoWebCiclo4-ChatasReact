const mongoose = require('mongoose')

const{Schema} = mongoose

const ProductSchema = new Schema({

    name: {type: String, required: [true, "Ingrese el nombre del producto"]},
    type: {type: String, required: true},
    price: {type: Number, required: [true, "Debe ingresar un precio para el producto"]},
    description: {type: String},
    status: {type:String, default:'Activo'},
    
})

module.exports = mongoose.model('product', ProductSchema)