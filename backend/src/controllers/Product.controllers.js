const ProductController = {}

const Product = require('../models/Product.models')

ProductController.register = async(req, res) => {

    const { name, type, price, description, status } = req.body

    const NewProduct = new Product({
        
        name,
        type,
        price,
        description,
        status,
        
    })

    const resp = await NewProduct.save()

    res.json({

        message :  "Producto creado",
        resp

    })

}

ProductController.getAll = async(req, res) => {

    const response = await Product.find();

    res.json(response)

}

ProductController.getByID = async(req, res) => {

    const id = req.params.id;
    const response = await Product.findOne( {_id:id} )
    res.json(response)

}

ProductController.update = async(req, res) => {

    const id = req.params.id;
    await Product.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        message: 'Producto actualizado'
    })

}

ProductController.delete = async(req, res) => {

    const id = req.params.id;
    await Product.findByIdAndUpdate({_id:id}, {status:'Inactivo'})
    res.json({
        message: 'Producto elminado'
    })

}

module.exports = ProductController


