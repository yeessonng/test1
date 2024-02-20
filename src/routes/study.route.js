import express from "express";
import asyncHandler from "express-async-handler";
import { startStudyController, stopStudyController, startBreakController, stopBreakController } from "../controllers/studyController.js";

export const studyRouter = express.Router({ mergeParams: true });

// 공부 시작 라우트
studyRouter.post('/start', asyncHandler(startStudyController));

// 공부 중지 라우트
studyRouter.post('/stop', asyncHandler(stopStudyController));

// 쉬는 시간 시작 라우트
studyRouter.post('/startBreak', asyncHandler(startBreakController));

// 쉬는 시간 중지 라우트
studyRouter.post('/stopBreak', asyncHandler(stopBreakController));
