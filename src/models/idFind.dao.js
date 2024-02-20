import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { findUserIdSql } from '../models/user.sql.js';

// 아이디 찾기
export const findUserIdDAO = async (email) => {
    try {
        const conn = await pool.getConnection();

        const [userData] = await pool.query(findUserIdSql, email);

        conn.release();

        return userData[0];
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}