import UserModel from "../Model/userModel.js";

//user create
export const createUserController = async(req,res) => {
    try{
        const {name,email,password}=req.body
        const response = await UserModel.createUser({name,email,password});
        res.status(201).json({
            message:"user has been created",
            userId:response
        })
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

//get all the users
export const getAllUserController = async (req,res) => {
    try {
        const data = await UserModel.getAllUsersModel();
        res.json(data);
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

export const updateUserPasswordController = async (req,res) => {
    try{
        const{password}=req.body;
        const updatePassword = await  UserModel.updateUserPasswordModel(req.params.id,{password});
        if(!updatePassword){
            res. status(404).json({
                message:"user not found"});
        }
        else{
            res.status(200).json({message: "password has been updated"});

        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }

}
export const deleteUserController = async(req,res) => {
    try{
        const deleteUser = await UserModel.deleteUser(req.params.id);
        if(!deleteUser){
            res.status(404).json({message:"user not found"});
        }
        else{
            res.status(200).json({message:"user has been deleted"});
        }
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}