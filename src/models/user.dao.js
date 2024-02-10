import { LoaderTargetPlugin } from "webpack";
import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {insertUserSql, confirmEmailSql, agreeMappingSql, getUserDataSql} from '../models/user.sql.js';

//이메일 중복 체크
export const confirmEmail = async (data) => {
    try{
        const conn = await pool.getConnection();

        //이메일 중복 없는 지 체크
        const [emailConfirm] = await pool.query(confirmEmailSql, data);
        
        //이메일 중복이면
        if(emailConfirm[0].isExistEmail){
            conn.release();
            return false;
        }
        
        conn.release();
        return true; 
    }catch (err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

//회원 추가
export const addUser = async (data) => {
    try{
        const conn = await pool.getConnection();

        //user 테이블 채우기
        const result = await pool.query(insertUserSql, [data.email, data.password]);

        const userId = parseInt(result[0].insertId);
        //agree 매핑테이블 채우기
        await pool.query(agreeMappingSql, userId);

        conn.release();

        return userId;
    }catch (err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getUserJoinData = async(userId) => {
    try{
        const conn = await pool.getConnection();
        
        const [userData] = await pool.query(getUserDataSql, userId);
        
        conn.release();

        return userData;
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}