import express from "express";
import asyncHandler from "express-async-handler";
import { userRegist } from "../controllers/user.controller";

export const userRouter = express.Router({mergeParams: true});
//회원가입
userRouter.post('/regist', asyncHandler(userRegist));