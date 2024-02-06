import { BaseError } from '../../config/error.js';
import {status} from "../../config/response.status.js";

import {addUser, confirmEmail, getUserJoinData} from '../models/user.dao.js';
import { previewUserDataDTO } from '../dtos/user.dto.js';

//회원가입
export const userAdd = async(body) => {
    //개인정보이용동의 null, false일 때 
    if(body.agreeCheck != true) {
        throw new BaseError(status.AGREE_NOT_CHECK);
    }
    
    const confirmEmailData = await confirmEmail(body.email);
    //이메일 중복
    if(!confirmEmailData){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }

    //비밀번호 확인
    if(body.password != body.passwordCheck){
        throw new BaseError(status.PASSWORD_NOT_CORRECT);
    }

    //회원 추가
    const addUserData = await addUser({
        'email': body.email,
        'password': body.password,
        "passwordCheck": body.passwordCheck,
        "agreeCheck": body.agreeCheck
    });//userId


    return previewUserDataDTO(await getUserJoinData(parseInt(addUserData)));
}