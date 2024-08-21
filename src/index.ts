import { connectDatabases } from './config/db';
import startServer from './config/server';
import express from 'express';
import routes from './routes/routes';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

connectDatabases()
    .then(() => {
        startServer();
    })
    .catch(err => {
        console.log('Failed to start application:', err);
    });

export default app;
