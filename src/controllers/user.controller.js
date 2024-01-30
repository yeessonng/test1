import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';

//테스트 api
export const userTest = async (req, res, next) => {
    req.body["userId"] = req.params.userId;
    res.send(response(status.SUCCESS, req.body));
}