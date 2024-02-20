import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';
import { findUserPassword } from '../services/pwFind.service.js';

// 비밀번호 찾기
export const findUserPasswordController = async (req, res, next) => {
    res.send(response(status.SUCCESS, await findUserPassword(req.body)));
}
