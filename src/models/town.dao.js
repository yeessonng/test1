import { LoaderTargetPlugin } from "webpack";
import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";

import {confirmCodeSql, insertTownSql, insertTownLeaderSql, insertTownChallengeSql, getTownDataSql} from './town.sql.js';

//타운 코드 중복 검사
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

//타운 추가
export const addTown = async(data) => {
    try{
        const conn = await pool.getConnection();

        //타운 테이블 추가
        const townData = await pool.query(insertTownSql, [data.town_name, data.town_explanation, data.town_code, data.userId])

        const townId = parseInt(townData[0].insertId);
        
        //타운 가입 테이블(타운장 추가)
        await pool.query(insertTownLeaderSql, [data.userId, townId]);

        //타운 챌린지 테이블
        await pool.query(insertTownChallengeSql, [data.challenge_time, townId])

        conn.release();
        
        return townId;
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getTownJoinData = async(townId) => {
    try{
        const conn = await pool.getConnection();

        const [townData] = await pool.query(getTownDataSql, townId)

        conn.release();
        
        return townData;
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}