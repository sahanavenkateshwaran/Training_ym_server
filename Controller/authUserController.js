import { hashpassword,passwordcheck} from "../utils/hash.js";
import { createToken } from "../utils/token.js";

import AuthUserModel from "../Model/authUserModel.js";

export const authSignUp = async(req,res)=>{
    try{
       const { name = null, email = null, password = null, role = "user" } = req.body

        const checkEmail = await AuthUserModel.userLoginModel(email)

        if(checkEmail){
            return res.status(500).json({message:"email already exists"})
        }
        //hashed
        const newPassword =await hashpassword( password);
        const id = await AuthUserModel.userSignupModel(
            {
                name : name,
                email : email,
                password : newPassword,
                role : role ||"user"
            })
            res.status(201).json({message : "user has been created"})
    
        }catch(err){
            res.status(500).json({error:err.message})
        }
}

export const authLogin = async (req,res) =>{
    try{
        const {email,password}=req.body
        const user = await AuthUserModel.userLoginModel(email);

        if(!user){
            return res.status(400).json({message: "invalid credentials"})

        }
        const userPassword = await passwordcheck(password,user.password)
        if(!userPassword){
            return res.status(400).json({
                message :  "wrong password"
            })
        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}
