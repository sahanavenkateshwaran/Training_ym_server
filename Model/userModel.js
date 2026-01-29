import db from "../Db/db.js";

const table = "users";

class userModel{
    static async createUser({name,email,password}){
        const sql=`INSERT INTO ${table}(name,email,password) values(?,?,?)`
        const [result] = await db.query(sql,[name,email,password])
        return result.insertId;
    }
}

export default userModel