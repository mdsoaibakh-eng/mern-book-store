import express from 'express';
import { PORT, MONGODB_URI } from './config.js';

const app = express();

app.get('/', (request, response) => {
    console.log('Received a request');
    return response.status(200).send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});