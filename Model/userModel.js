import db from "../Db/db.js";

const table = "users";

class userModel{
    static async createUser({name,email,password}){
        const sql=`INSERT INTO ${table}(name,email,password) values(?,?,?)`
        const [result] = await db.execute(sql,[name,email,password])
        return result.insertId;
    }
    static async getAllUsersModel(){
        const sql=`SELECT * FROM ${table}`;
        const[rows]=await db.execute(sql);
        return rows;

    }
    static async updateUserPasswordModel(id,{password}){
        const sql=`UPDATE ${table} SET password=? WHERE id=?`
        const[update]=await db.execute(sql,[password,id]);
        return update.affectedRows;
    }
    static async deleteUser(id){
        const sql = `delete from ${table} where id=?`;
        const [deleteUser] = await db.execute(sql, [id]);
        return deleteUser.affectedRows;
    }
}

export default userModel