import { LoaderTargetPlugin } from "webpack";
import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";

import {confirmCodeSql} from './town.sql.js';

export const confirmTownCode = async(code) => {
    try{
        const conn = await pool.getConnection();

        const [codeConfirm] = await pool.query(confirmCodeSql, code)

        //중복이면
        if(codeConfirm[0].isExistCode){
            conn.release();
            return false;
        }

        conn.release();
        return true;
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}