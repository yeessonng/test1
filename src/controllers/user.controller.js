import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';
import {userAdd} from '../services/user.service.js';
import {userCoin, userTown, userOneTown} from '../providers/user.provider.js';
import { BaseError } from '../../config/error.js';

//회원가입
export const userRegist = async (req, res, next) => {
    res.send(response(status.SUCCESS, await userAdd(req.body)));
}

//user 코인 조회
export const getUserCoin = async(req, res, next) => {
    res.send(response(status.SUCCESS, await userCoin(req.params.userId)));
}

//user가 가입한 전체 타운 조회
export const getUserTown = async(req, res, next) => {
    res.send(response(status.SUCCESS, await userTown(req.params.userId)));
}

//user가 가입한 개별 타운 조회
export const getUserOneTown = async(req, res, next) => {
    res.send(response(status.SUCCESS, await userOneTown(req.params.userId, req.params.townId)));
}