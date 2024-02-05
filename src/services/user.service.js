import { BaseError } from '../../config/error.js';
import {status} from "../../config/response.status.js";

import {addUser} from '../models/user.dao.js';

//회원가입
export const userAdd = async(body) => {
    //개인정보이용동의 null, false일 때
    if(!body.agreeCheck) {
        throw new BaseError(status.AGREE_NOT_CHECK);
    }

    
    const addUserData = await addUser({
        'email': body.email,
        'password': body.password
    })

    return addUserTest;
}