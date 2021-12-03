const mongoose = require('mongoose')
const uniqueValidator = require("mongoose-unique-validator");

// Roles
const roles = {
  values: ["ADMIN", "USER"],
  message: "{VALUE} no es un rol válido",
};

const{Schema} = mongoose

const UserSchema = new Schema({

    name: {type:String, required:[true, "El nombre es necesario"]},
    surname: {type:String, required:[true, "El apellido es necesario"]},
    email: {type:String, required:[true, "Es necesario una direccion de correo"]},
    password: {type:String, required:[true, "La contraseña es necesaria"]},
    birthdate: {type:Date, required:[true, "La fecha de nacimiento es necesaria"]},
    last_start_date: {type:Date, default: Date.now},
    role: {type: String, default:'USER', enum:roles},
    status: {type:String, default:'Activo'},
    
})
UserSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.pass;
    return obj;
};

UserSchema.plugin(uniqueValidator, {
    message: "Error, esperaba {PATH} único.",
});



module.exports = mongoose.model('user', UserSchema)