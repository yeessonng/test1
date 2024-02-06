import { LoaderTargetPlugin } from "webpack";
import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {loginValid} from '../models/user.sql.js';

//아이디와 비밀번호가 일치하는지 확인
export const daoLogin = async (data) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(loginValid, data.id);

        if(result){//입력된 아이디에 해당하는 아이디가 데이터베이스에 있음
            const password=result.password;//입력한 아이디에 해당하는 비밀번호
            if(password==data.password){//입력한 비밀번호와 해당하는 비밀번호가 일치하는지?
                console.log("로그인 성공");
                return true;
            }else{//비밀번호가 틀림
                console.log("비밀번호가 일치하지 않습니다.");
                return false;
            }

        }else{//아이디가 데이터베이스에 존재조차 하지 않음
            console.log("아이디가 존재하지 않습니다.");
            return false;

        }   

       
    }catch (err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}