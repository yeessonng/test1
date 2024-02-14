import { BaseError } from '../../config/error.js';
import {status} from "../../config/response.status.js";

import {confirmTownCode, addTown, getTownJoinData, confirmInviteCode, addTownMember, getTownMemberData} from '../models/town.dao.js';
import {previewTownDataDTO, previewTownMemberDataDTO} from '../dtos/town.dto.js';

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

//타운 멤버 가입
export const postNewMember = async(body) => {
    const confirmInviteCodeData = await confirmInviteCode(body.town_code);
    //townId int로 반환

    //초대 코드가 맞지 않음
    if(!confirmInviteCodeData){
        throw new BaseError(status.CODE_NOT_CORRECT)
    }
    
    const addTownMemberData = await addTownMember({
        'userId': body.userId,
        'townId': confirmInviteCodeData
    })

    if(addTownMemberData == 'memberovererr'){
        throw new BaseError(status.TOWN_IS_FULL);
    }

    if(addTownMemberData == 'membererr'){
        throw new BaseError(status.MEMBER_ALREADY_EXIST);
    }

    return previewTownMemberDataDTO(await getTownMemberData(confirmInviteCodeData))
}