import { LoaderTargetPlugin } from "webpack";
import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {insertUserSql, confirmEmailSql, agreeMappingSql, getUserDataSql, userTownDataSql, confirmUserSql, userOneTownDataSql} from '../models/user.sql.js';
import {userCoinDataSql, checkMemSql, confirmMemNumSql} from './town.sql.js';

/*
copy용
export const getUserCoinData = async(userId) => {
    try{

    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
*/

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

//user coin 조회
export const getUserCoinData = async(userId) => {
    try{
        const conn = await pool.getConnection();

        const [userCoin] = await pool.query(userCoinDataSql, userId);

        userCoin[0].userId = userId;

        conn.release();
        return userCoin;
    }catch(err){
        //여기에 들어오는 거면 sql이 잘못된 것. 아예 테이블에 해당 유저가 포함되지 않았다는 뜻
        throw new BaseError(status.MEMBER_NOT_FOUND);
    }
}

//user town 조회(전체)
export const getUserTownData = async(userId) => {
    try{
        const conn = await pool.getConnection();

        //가입된 타운이 있는지
        const [confirmUser] = await pool.query(confirmUserSql, userId);

        if(!(confirmUser[0].confirmUser)){
            conn.release();
            return false;
        }

        const [userTownData] = await pool.query(userTownDataSql, userId);

        conn.release();
        return userTownData;
    }catch(err){
        throw new BaseError(status.MEMBER_NOT_FOUND);
    }
}

//user town 조회(개별)
export const getUserOneTownData = async(userId, townId) => {
    try{
        const conn = await pool.getConnection();

        const [confirmUser] = await pool.query(checkMemSql, [userId, townId]);

        if(!(confirmUser[0].isExistMember)){
            conn.release();
            return false;
        }

        const [userOneTownData] = await pool.query(userOneTownDataSql, [userId, townId])

        const [townMem] = await pool.query(confirmMemNumSql, townId);

        userOneTownData[0].town_member_count = townMem[0].count;

        conn.release();
        
        return userOneTownData;
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
