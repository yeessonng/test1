import express from "express";
import asyncHandler from 'express-async-handler';
import {newTown, newMember} from '../controllers/town.controller.js';

export const townRouter = express.Router({mergeParams: true});

//타운 생성
townRouter.post('/add', asyncHandler(newTown));

//타운 가입
townRouter.post('/member', asyncHandler(newMember))