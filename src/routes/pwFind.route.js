import express from "express";
import asyncHandler from "express-async-handler";
import { findUserPasswordController } from "../controllers/pwFind.controller.js";

export const pwFindRouter = express.Router({ mergeParams: true });

// 비밀번호 찾기 라우트
pwFindRouter.post('/findUserPassword', asyncHandler(findUserPasswordController));
