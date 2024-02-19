import express from "express";
import asyncHandler from "express-async-handler";
import { userRegist, getUserCoin } from "../controllers/user.controller.js";

export const userRouter = express.Router({mergeParams: true});

//회원가입
userRouter.post('/regist', asyncHandler(userRegist));

//user 코인 조회
userRouter.get('/:userId/coin', asyncHandler(getUserCoin));