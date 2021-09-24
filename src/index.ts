import express from 'express';
import { json } from 'body-parser';

import { dataRoutes } from './routes/data/dataRoutes';

const app = express();
app.use(json());
app.use(dataRoutes);

app.listen(3000, () => {
    console.log('server up');
});
