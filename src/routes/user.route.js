import express from "express";
import asyncHandler from "express-async-handler";
import { userRegist, getUserCoin, getUserTown, getUserOneTown } from "../controllers/user.controller.js";

export const userRouter = express.Router({mergeParams: true});

//회원가입
userRouter.post('/regist', asyncHandler(userRegist));

//user 코인 조회
userRouter.get('/:userId/coin', asyncHandler(getUserCoin));

//user가 가입한 타운 조회(전체)
userRouter.get('/:userId/town', asyncHandler(getUserTown))

//user가 가입한 타운 조회(개별)
userRouter.get('/:userId/town/:townId', asyncHandler(getUserOneTown))