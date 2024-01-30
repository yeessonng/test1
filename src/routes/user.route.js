import express from "express";
import asyncHandler from "express-async-handler";
import { userTest } from "../controllers/user.controller";

export const userRouter = express.Router({mergeParams: true});

userRouter.post('/', asyncHandler(userTest));