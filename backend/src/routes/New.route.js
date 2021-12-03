const { Router } = require('express');

const router = Router();

const NewController = require('../controllers/New.controllers')
const Auth = require('../helpers/Auth')

router.post('/register',Auth.tokenVerify,NewController.register);
router.get('/list-all',NewController.getAll);
router.get('/list_one/:id',NewController.getByID);
router.put('/update/:id',Auth.tokenVerify,NewController.update);
router.put('/delete/:id',Auth.tokenVerify,NewController.delete);

module.exports = router

