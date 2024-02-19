import {BaseError} from "../../config/error.js";
import {status} from "../../config/response.status.js";

import {previewTownCoinData} from '../models/town.dao.js';
import {previewTownCoinDTO} from '../dtos/town.dto.js';

export const townCoin = async(townId) => {
    return previewTownCoinDTO(await previewTownCoinData(townId))
}