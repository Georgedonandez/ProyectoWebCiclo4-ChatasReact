const { Router } = require('express');

const router = Router();

const UserController = require('../controllers/User.controllers');
const Auth = require ('../helpers/Auth')

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/list-all', Auth.tokenVerify, UserController.getAll);
router.get('/list_one/:id', Auth.tokenVerify, UserController.getByID);
router.put('/update/:id', Auth.tokenVerify, UserController.update);
router.put('/delete/:id', Auth.tokenVerify, UserController.delete);

module.exports = router

