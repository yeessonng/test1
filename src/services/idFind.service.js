import { BaseError } from '../../config/error.js';
import { status } from "../../config/response.status.js";

import { findUserIdDAO } from '../models/idFind.dao.js';
import { userIdDTO } from '../dtos/idFind.dto.js';

// 아이디 찾기
export const findUserId = async (body) => {
    const userData = await findUserIdDAO(body.email);

    if (!userData) {
        throw new BaseError(status.USER_NOT_FOUND);
    }

    return userIdDTO(userData);
}
