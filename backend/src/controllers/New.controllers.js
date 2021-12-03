const NewController = {}

const New = require('../models/New.models')

NewController.register = async(req, res) => {

    const { name, description, status}= req.body

    const NewNew = new New({
        
        name,
        description,
        status

    })

    const resp = await NewNew.save()

    res.json({

        message :  "Noticia creada",
        resp

    })

}

NewController.getAll = async(req, res) => {

    const response = await New.find();

    res.json(response)

}

NewController.getByID = async(req, res) => {

    const id = req.params.id;
    const response = await New.findOne( {_id:id} )
    res.json(response)

}

NewController.update = async(req, res) => {

    const id = req.params.id;
    await New.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        message: 'Noticia actualizada'
    })

}

NewController.delete = async(req, res) => {

    const id = req.params.id;
    await New.findByIdAndUpdate({_id:id}, {status:'Inactivo'})
    res.json({
        message: 'Noticia elminada'
    })

}

module.exports = NewController


