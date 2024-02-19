import express from "express";
import asyncHandler from 'express-async-handler';
import {newTown, newMember, saveCoin, getTownCoin} from '../controllers/town.controller.js';

export const townRouter = express.Router({mergeParams: true});

//타운 생성
townRouter.post('/add', asyncHandler(newTown));

//타운 가입
townRouter.post('/member', asyncHandler(newMember));

//타운 코인 적립
townRouter.post('/coin', asyncHandler(saveCoin));

//타운 코인 조회
townRouter.get('/:townId/coin', asyncHandler(getTownCoin));