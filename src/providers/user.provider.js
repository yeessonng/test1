import {BaseError} from "../../config/error.js";
import {status} from "../../config/response.status.js";

import {getUserCoinData, getUserTownData, getUserOneTownData} from '../models/user.dao.js';
import {previewUserCoinDTO, previewUserTownDTO, previewUserOneTownDTO} from '../dtos/user.dto.js';

//user 코인 조회
export const userCoin = async(userId) => {
    return previewUserCoinDTO(await getUserCoinData(userId));
}

//user가 가입한 전체 타운 조회
export const userTown = async(userId) => {
    const userTownsData = await getUserTownData(userId);
    if(!userTownsData){
        throw new BaseError(status.USER_TOWN_NOT_FOUND);
    }
    return previewUserTownDTO(userTownsData);
}

//user가 가입한 개별 타운 조회
export const userOneTown = async(userId, townId) => {
    const userOneTownData = await getUserOneTownData(userId, townId);
    if(!userOneTownData){
        throw new BaseError(status.MEMBER_NOT_EXIST);
    }
    return previewUserOneTownDTO(userOneTownData);
}