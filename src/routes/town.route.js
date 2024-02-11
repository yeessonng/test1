import express from "express";
import asyncHandler from 'express-async-handler';
import {newTown} from '../controllers/town.controller.js';

export const townRouter = express.Router({mergeParams: true});

townRouter.post('/add', asyncHandler(newTown));