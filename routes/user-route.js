const express = require('express');
const userController = require('../controllers/user-controller')

const router = express.Router();

//fetch users
router.get('/fetch/users', userController.fetchUsers)

//remove user
router.post('/delete/user/:id', userController.deleteUser)

//deactivate user
router.post('/deactivate/user/:id', userController.deactivateUser);

//activate user
router.post('/activate/user/:id', userController.activateUser);

//remove user
router.post('/update/user/:id', userController.updateUser)

module.exports = router