const PurchaseController = {}

const Purchase = require('../models/Purchase.models')

PurchaseController.register = async(req, res) => {

    const { id_user, id_product, quantity, total_price, status } = req.body

    const NewPurchase = new Purchase({
        
        id_user, 
        id_product, 
        quantity, 
        total_price, 
        status
        
    })

    const resp = await NewPurchase.save()

    res.json({

        message :  "Compra creada",
        resp

    })

}

PurchaseController.getAll = async(req, res) => {

    const response = await Purchase.find();

    res.json(response)

}

PurchaseController.getByID = async(req, res) => {

    const id = req.params.id;
    const response = await Purchase.findOne( {_id:id} )
    res.json(response)

}

PurchaseController.update = async(req, res) => {

    const id = req.params.id;
    await Purchase.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        message: 'Compra actualizada'
    })

}

PurchaseController.delete = async(req, res) => {

    const id = req.params.id;
    await Purchase.findByIdAndUpdate({_id:id}, {status:'Inactivo'})
    res.json({
        message: 'Compra elminada'
    })

}

module.exports = PurchaseController


