const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.delete);

router.get('/',  userController.getAllUsers);


module.exports = router;


