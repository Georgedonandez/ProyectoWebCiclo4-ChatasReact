const mongoose = require('mongoose')

const{Schema} = mongoose

const PurchaseSchema = new Schema({

    id_user: {type: String, required: [true, "Se necesita un usuario para la compra"]},
    id_product: {type: String, required: [true, "Se necesita un producto para la compra"]},
    quantity: {type: Number, required: [true, "Seleccione una cantidad"] },
    total_price: {type: Number, required: true},
    date: {type: Date , default: Date.now},
    status: {type:String, default:'Activo'},
})

module.exports = mongoose.model('user', PurchaseSchema)