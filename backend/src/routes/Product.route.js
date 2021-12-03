const { Router } = require('express');

const router = Router();

const ProductController = require('../controllers/Product.controllers')
const Auth = require('../helpers/Auth')

router.post('/register',Auth.tokenVerify,ProductController.register);
router.get('/list-all',ProductController.getAll);
router.get('/list_one/:id',ProductController.getByID);
router.put('/update/:id',Auth.tokenVerify,ProductController.update);
router.put('/delete/:id',Auth.tokenVerify,ProductController.delete);

module.exports = router

