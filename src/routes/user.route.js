import express from "express";
import asyncHandler from "express-async-handler";
<<<<<<< HEAD
import { userRegist } from "../controllers/user.controller";

export const userRouter = express.Router({mergeParams: true});
//회원가입
userRouter.post('/regist', asyncHandler(userRegist));
=======
import { userLogin } from "../controllers/user.controller";

export const userRouter = express.Router({mergeParams: true});

userRouter.post('/', asyncHandler(userTest));
userRouter.post('/login', userLogin);
>>>>>>> ee13a81090c3d1013c3476d73fcbae88f46d155c
