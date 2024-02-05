import { LoaderTargetPlugin } from "webpack";
import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {insertUser} from '../models/user.sql.js';

export const addUser = async (data) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertUser, [data.email, data.password]);

        conn.release();
        console.log(result[0]);
        
        return result[0].userId;
    }catch (err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}