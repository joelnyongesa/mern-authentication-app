import express from 'express';
import { routes } from './routes';
import { initializeConnection } from './db';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

routes.forEach((route) => {
    app[route.method](route.path, route.handler)
})

// Connect to the database
initializeConnection()
    .then(()=> {
        app.listen(PORT, ()=> {
            console.log(`Server is listening on PORT ${PORT}`);
        });
    });