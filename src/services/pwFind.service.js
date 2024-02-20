import { BaseError } from '../../config/error.js';
import { status } from "../../config/response.status.js";

import { findUserPasswordDAO } from '../models/pwFind.dao.js';
import { userPasswordDTO } from '../dtos/pwFind.dto.js';

// 비밀번호 찾기
export const findUserPassword = async (body) => {
    const userData = await findUserIdDAO(body.email);

    if (!userData) {
        throw new BaseError(status.USER_NOT_FOUND);
    }

    const passwordData = await findUserPasswordDAO(userData.id);

    return userPasswordDTO(passwordData);
}
                                                                                                                                                                                                                                                                                                                                                                                                                         