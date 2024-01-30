import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';

//테스트 api
export const userTest = async (req, res, next) => {
    console.log("controller ok");
    console.log(req.params.userId, req.body);

    res.send(response(status.SUCCESS, req.params.userId, req.body));
}