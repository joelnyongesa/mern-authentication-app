import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const signupRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {
        const { username, email, password } = req.body;

        const db = getDbConnection('my-auth-app-db');

        const user = await db.collection('users').findOne({ email });

        if (user){
            res.sendStatus(409);
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const result = await db.collection('users').insertOne({
            username,
            email,
            passwordHash,
        });

        const { insertedUserId } = result;

        // Generate the web tokens
        jwt.sign({
            id: insertedUserId,
            email,
        },
            process.env.JWT_SECRET,
            {
                expiresIn: '2d',
            },
            (err, token) => {
                if(err){
                    return res.status(500).send(err);
                }
                res.status(201).json({ token })
            }
        );
    }
}