import express from 'express';
import {Register} from '../Controller/UserController.js';

export const userRouter = express.Router();
userRouter.post('/',Register);