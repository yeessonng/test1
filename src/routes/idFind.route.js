import express from "express";
import asyncHandler from "express-async-handler";
import { findUserIdController } from "../controllers/idFind.controller.js";

export const idFindRouter = express.Router({ mergeParams: true });

// 아이디 찾기 라우트
idFindRouter.post('/findUserId', asyncHandler(findUserIdController));
