import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';
import {userAdd} from '../services/user.service.js';

//회원가입
export const userRegist = async (req, res, next) => {
    res.send(response(status.SUCCESS, await userAdd(req.body)));
}