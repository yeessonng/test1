import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';
import {postNewTown, postNewMember, postSaveCoin} from '../services/town.service.js';

export const newTown = async(req, res, next) => {
    res.send(response(status.SUCCESS, await postNewTown(req.body)));
}

export const newMember = async(req, res, next) => {
    res.send(response(status.SUCCESS, await postNewMember(req.body)));
}

export const saveCoin = async(req, res, next) => {
    res.send(response(status.SUCCESS, await postSaveCoin(req.body)));
}