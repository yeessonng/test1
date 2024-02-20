import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { findUserPasswordSql } from '../models/user.sql.js';

// 비밀번호 찾기
export const findUserPasswordDAO = async (userId) => {
    try {
        const conn = await pool.getConnection();

        const [userData] = await pool.query(findUserPasswordSql, userId);

        conn.release();

        return userData[0];
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
