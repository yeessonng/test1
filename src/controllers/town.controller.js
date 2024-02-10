import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';
import {postNewTown} from '../services/town.service.js';

export const NewTown = async(req, res, next) => {
    res.send(response(status.SUCCESS, await postNewTown(req.body)));
}