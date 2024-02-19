import {BaseError} from "../../config/error.js";
import {status} from "../../config/response.status.js";

import {getUserCoinData} from '../models/user.dao.js';
import {previewUserCoinDTO} from '../dtos/user.dto.js';

export const userCoin = async(userId) => {
    return previewUserCoinDTO(await getUserCoinData(userId))
}