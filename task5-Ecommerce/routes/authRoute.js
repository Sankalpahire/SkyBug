import express from 'express'
import {registerController , loginController , fetchAllusers, testController, forgotPasswordController} from '../controllers/authController.js'
import {fetchAllItems,getbyId,registerItem,registerItemsblulk} from '../controllers/ItemsController.js'
import {isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

//route object 
const router = express.Router()

//routing
//Register with post method
router.post('/register', registerController )

// login 
router.post('/login', loginController)

/////fetching app users api
router.get('/all-users', fetchAllusers)

//forgot password
router.post('/forgot-password', forgotPasswordController);

//test
router.get('/test' ,requireSignIn,isAdmin ,testController);

//protected route
router.get('/user-auth' ,requireSignIn,(req,res) => {
    res.status('200').send({ok: true})
});

//protected route admin
router.get('/admin-auth' ,requireSignIn, isAdmin,(req,res) => {
    res.status('200').send({ok: true})
});
// router.get(/)
router.get('/fetch-items',fetchAllItems)
router.get('/getbyid',getbyId)
router.post('/register-new-item',registerItem)
router.post('/register-new-items-bulk',registerItemsblulk)


export default router

