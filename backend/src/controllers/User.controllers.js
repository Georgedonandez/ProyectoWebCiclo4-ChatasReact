const UserController = {}
const User = require('../models/User.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

UserController.register = async(req, res) => {

    const { name, surname, email, password, birthdate, role} = req.body

    const NewUser = new User({
        
        name,
        surname,
        email,
        password,
        birthdate,
        role

    })
    const emailUser = await User.findOne({email: email})
    if (emailUser) {
        res.json({
            message: "El correo ya esta registrado"
        })        
    }
    else{
        NewUser.password = await bcrypt.hash(password,10);
        const token = jwt.sign({_id: NewUser._id}, 'Secreta')
        await NewUser.save()
        res.json({
            message: 'Bienvenido',
            id: NewUser._id,
            name: NewUser.name,
            role,
            token
        })
    }
}

UserController.login = async(req,res) => {

    const {email, password}= req.body
    const user = await User.findOne({email:email})
    if(!user){

        return res.json({
        
        mensaje:'Correo incorrecto'
        
        })

    }

    const match = await bcrypt.compare(password,user.password)

    if(match){

        const token = jwt.sign({ _id: user._id }, 'Secreta')
        return res.json({

            message: 'Bienvenido',
            id: user._id,
            name: user.name +" "+ user.surname,
            rol: user.role,
            token

        })

    }

    else{

        res.json({

            mensaje:'Constraseña incorrecta'

        })

    }

}

UserController.getAll = async(req, res) => {

    const response = await User.find();

    res.json(response)

}

UserController.getByID = async(req, res) => {

    const id = req.params.id;
    const response = await User.findOne( {_id:id} )
    res.json(response)

}

UserController.update = async(req, res) => {

    const id = req.params.id;
    const body = req.body;
    body.password = await bcrypt.hash(body.password, 10)
    await User.findByIdAndUpdate({_id:id}, body )
    res.json({
        message: 'Usuario actualizado'
    })

}

UserController.delete = async(req, res) => {

    const id = req.params.id;
    await User.findByIdAndUpdate({_id:id}, {status:'Inactivo'})
    res.json({
        message: 'Usuario elminado'
    })

}

module.exports = UserController

