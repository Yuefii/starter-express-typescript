import express from 'express';
import {
    createUserController,
    deleteUserController,
    getUserByIdController,
    getUsersController,
    updateUserController
} from './users.controller';

export const router = express.Router()

router.post('/user', createUserController);
router.get('/user', getUsersController);
router.get('/user/:id', getUserByIdController);
router.patch('/user/:id', updateUserController);
router.delete('/user/:id', deleteUserController);

