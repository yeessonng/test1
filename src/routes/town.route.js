import express from "express";
import asyncHandler from 'express-async-handler';
import {NewTown} from '../controllers/town.controller.js';

export const townRouter = express.Router({mergeParams: true});

townRouter.post('', asyncHandler(NewTown));