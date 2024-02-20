import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';
import { startStudy, stopStudy, startBreak, stopBreak } from '../services/studyService.js';

// 공부 시작
export const startStudyController = async (req, res, next) => {
    res.send(response(status.SUCCESS, await startStudy()));
}

// 공부 중지
export const stopStudyController = async (req, res, next) => {
    res.send(response(status.SUCCESS, await stopStudy()));
}

// 쉬는 시간 시작
export const startBreakController = async (req, res, next) => {
    res.send(response(status.SUCCESS, await startBreak()));
}

// 쉬는 시간 중지
export const stopBreakController = async (req, res, next) => {
    res.send(response(status.SUCCESS, await stopBreak()));
}
