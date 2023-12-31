import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const logInRoute = {
    path:'/api/login',
    method: 'post',
    handler: async (req, res) => {
        const { email, password} = req.body;

        const db = getDbConnection('my-auth-app-db');

        const user = await db.collection('')
    }
}