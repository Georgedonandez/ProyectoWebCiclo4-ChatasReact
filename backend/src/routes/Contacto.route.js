const { Router } = require('express');
const router = Router();
const ContactController = require('../controllers/Contacto.controllers')
const Auth = require('../helpers/Auth')
/*
router.post('/register',Auth.tokenVerify,ContactController.register);
router.get('/list-all',ContactoController.getAll);
router.get('/list_one/:id', ContactoController.getByID);
router.get('/list-all-admin/:id',Auth.tokenVerify,ContactoController.contactOfAuth);
router.delete('/delete/:id',Auth.tokenVerify,ContactoController.delete);
router.put('/update/:id', Auth.tokenVerify, ContactoController.update);
router.get('/search/:name/:id', Auth.tokenVerify, ContactoController.search)
*/
module.exports = router

