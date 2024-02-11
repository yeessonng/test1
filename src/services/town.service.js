import { BaseError } from '../../config/error.js';
import {status} from "../../config/response.status.js";

import {confirmTownCode, addTown, getTownJoinData} from '../models/town.dao.js';
import {previewTownDataDTO} from '../dtos/town.dto.js';

//타운 생성
export const postNewTown = async(body) => {
    do{
        //초대코드생성
        const string_length = 6
        var townCode = ''
        for(var i = 0; i < string_length; i++){
            townCode += String(Math.floor(Math.random() * 10))
        }

        var confirmTownCodeData = await confirmTownCode(townCode);

    }while(!confirmTownCodeData)//초대코드 중복 아닐때까지 계속 반복

    //타운 추가
    const addTownData = await addTown({
        'userId': body.userId,
        'town_name': body.town_name,
        'town_code': townCode,
        'town_explanation': body.town_explanation,
        'challenge_time': body.challenge_time
    })//townId

    return previewTownDataDTO(await getTownJoinData(addTownData))
}