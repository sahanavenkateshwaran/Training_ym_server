import express from 'express'

import { protect } from '../middleware/protect.js';
import { isAdmin } from '../middleware/admin.js';
import { authSignUp, authLogin } from '../Controller/authUserController.js';

const authUserRoutes = express.Router()

authUserRoutes.post('/authsign', authSignUp);
authUserRoutes.post('/authlogin', authLogin);



authUserRoutes.get('/admin-route', protect, isAdmin, (req, res) => {
    res.status(200).json({ message: "protected profile" ,user: req.role});
})
authUserRoutes.get('/admin',protect,isAdmin,(req,res)=>{
    res.json({
        message:"Welcome admin user",user:req.role
    })
})
export default authUserRoutes;