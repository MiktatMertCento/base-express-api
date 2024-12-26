import { Router, Request, Response } from 'express';
import { UserResponse, User } from '../types/user.types';

const router = Router();

/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 profile:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     name:
 *                       type: string
 */
router.get('/profile', (req: Request, res: Response<UserResponse>) => {
    const user: User = {
        id: 1,
        name: 'Test User'
    };
    
    res.json({
        message: 'Profile retrieved successfully',
        profile: user
    });
});

/**
 * @swagger
 * /api/user/update:
 *   put:
 *     summary: Update user profile
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 newData:
 *                   type: object
 */
router.put('/update', (req: Request, res: Response<UserResponse>) => {
    res.json({
        message: 'Profile updated successfully',
        newData: req.body
    });
});

export default router; 