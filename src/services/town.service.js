import { BaseError } from '../../config/error.js';
import {status} from "../../config/response.status.js";

import {confirmTownCode} from '../models/town.dao.js';

//타운 생성
export const postNewTown = async(body) => {
    //초대코드생성

    do{
        //초대코드생성
        const string_length = 6
        var townCode = ''
        for(var i = 0; i < string_length; i++){
            townCode += String(Math.floor(Math.random() * 10))
        }

        var confirmTownCodeData = await confirmTownCode(townCode);

    }while(!confirmTownCodeData)//초대코드 중복 아닐때까지 계속 반복

    



}