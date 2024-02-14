import { LoaderTargetPlugin } from "webpack";
import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";

import {confirmCodeSql, insertTownSql, insertTownMemberSql, insertTownChallengeSql, getTownDataSql, inviteCodeConfirmSql, confirmMemNumSql, getTownMemberSql, checkMemSql} from './town.sql.js';

//---------------------------타운 생성
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
        await pool.query(insertTownMemberSql, [data.userId, townId]);

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

//---------------------------타운 멤버 가입

//초대 코드 확인 & 타운 id 리턴
export const confirmInviteCode = async(code) => {
    try{
        const conn = await pool.getConnection();

        const [inviteCodeConfirm] = await pool.query(inviteCodeConfirmSql, String(code));

        //req로 받은 초대코드를 가진 타운이 있는지 검사 > 없다면 false 반환?
        if(!inviteCodeConfirm){
            conn.release();
            return false;
        }

        conn.release();
        //맞는 초대 코드 > townId 반환
        return parseInt(inviteCodeConfirm[0].id);

    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const addTownMember = async(data) => {
    try{
        const conn = await pool.getConnection();

        //타운 멤버수 7명 이상인지 확인
        const [memNum] = await pool.query(confirmMemNumSql, data.townId);

        if(parseInt(memNum[0].count) >= 7){
            conn.release();
            return 'memberovererr';
        }

        //이미 가입된 회원인지
        const [checkMem] = await pool.query(checkMemSql, [data.userId, data.townId]);

        //true면 이미 가입된 회원
        if(checkMem[0].isExistMember){
            conn.release();
            return 'membererr';
        }

        await pool.query(insertTownMemberSql, [data.userId, data.townId]);

        conn.release();
        return true;     
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getTownMemberData = async(townId) => {
    try{
        const conn = await pool.getConnection();

        const [getTownMemberData] = await pool.query(getTownMemberSql, townId);
        
        const [countMem] = await pool.query(confirmMemNumSql, townId);

        getTownMemberData[0].count = parseInt(countMem[0].count);
        
        conn.release();
        return getTownMemberData;
    }catch(err){
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}