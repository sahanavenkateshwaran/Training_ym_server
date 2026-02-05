import bcrypt from 'bcryptjs'

//password hashing
export const hashpassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

//password check
export const passwordcheck= async (password,hashpassword) =>{
    return await bcrypt.compare(password,hashpassword);

}