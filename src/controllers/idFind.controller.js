import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';
import { findUserId } from '../services/idFind.service.js';

// 아이디 찾기
export const findUserIdController = async (req, res, next) => {
    res.send(response(status.SUCCESS, await findUserId(req.body)));
}
