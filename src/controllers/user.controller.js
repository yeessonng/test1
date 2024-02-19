import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';
import {userAdd} from '../services/user.service.js';
import {userCoin} from '../providers/user.provider.js';

//회원가입
export const userRegist = async (req, res, next) => {
    res.send(response(status.SUCCESS, await userAdd(req.body)));
}

//user 코인 조회
export const getUserCoin = async(req, res, next) => {
    res.send(response(status.SUCCESS, await userCoin(req.params.userId)))
}

