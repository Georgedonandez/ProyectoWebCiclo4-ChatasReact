const { Router } = require('express');

const router = Router();

const PurchaseController = require('../controllers/Purchase.controllers')
const Auth = require('../helpers/Auth')

router.post('/register',Auth.tokenVerify,PurchaseController.register);
router.get('/list-all',Auth.tokenVerify,PurchaseController.getAll);
router.get('/list_one/:id',Auth.tokenVerify,PurchaseController.getByID);
router.put('/update/:id',Auth.tokenVerify,PurchaseController.update);
router.put('/delete/:id',Auth.tokenVerify,PurchaseController.delete);

module.exports = router

