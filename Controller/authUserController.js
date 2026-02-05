import { hashpassword,passwordcheck} from "../utils/hash";
import { createToken } from "../utils/token.js";

import AuthUserModel from "../Model/authUserModel.js";

export const authSignUp = async(req,res)=>{
    try{
        const{name,email,password,role}=req.body
        const checkEmail = await AuthUserModel.userLoginModel(email)

        if(checkEmail){
            return res.status(500).json({message:"email already exists"})
        }
    }catch(err){
        res.status(500).json({error:err.message})
    }
}
