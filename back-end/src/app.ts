import express from 'express';
import { router } from './routes/index';

import './database';

const app = express();

app.use(express.json());
app.use(router);

app.get('/', (request, response) => response.json({ message: 'cd-bag api' }));

export { app };