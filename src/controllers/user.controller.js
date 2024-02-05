import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';
import {userTestTest} from '../services/user.service.js';

//테스트 api
export const userTest = async (req, res, next) => {
    res.send(response(status.SUCCESS, await userTestTest(req.body)));
}
