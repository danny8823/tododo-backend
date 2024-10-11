const express = require('express')
const userController = require('../controller/userController')
const isAuthenticated = require('../middlewares/isAuth')
const userRouter = express.Router()

userRouter.post('/api/users/register', userController.register)
userRouter.post('/api/users/login', userController.login)
userRouter.get('/api/users/profile', isAuthenticated, userController.profile)
userRouter.put('/api/users/change-password', isAuthenticated, userController.changeUserPassword)
userRouter.put('/api/users/update-profile', isAuthenticated, userController.updateUserProfile)

module.exports = userRouter 
