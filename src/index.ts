import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';

import { dataRoutes } from './routes/data/dataRoutes';

import { database } from './db/db';

const app = express();
app.use(json());
app.use('/api/meals', dataRoutes);

mongoose
    .connect(database)
    .then(() => {
        console.table([{ server: 'running', status: 'ok' }]);
        app.listen(3001);
    })
    .catch((error: string) => {
        console.log(error);
    });
