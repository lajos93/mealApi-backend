import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { json } from 'body-parser';

import { name } from './routes/data/name';
import { category } from './routes/data/category';
import { ingredient } from './routes/data/ingredient';

import { database } from './db/db';

const app = express();
app.use(cors());
app.use(json());

app.use('/api/meals/name', name);
app.use('/api/meals/category', category);
app.use('/api/meals/ingredient', ingredient);

mongoose
    .connect(database)
    .then(() => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
