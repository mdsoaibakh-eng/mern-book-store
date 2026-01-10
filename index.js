import express from 'express';
import { PORT, MONGODB_URI } from './config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (request, response) => {
    console.log('Received a request');
    return response.status(200).send('Hello World!');
});



mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');  
        app.listen(PORT, () => {
          console.log(`App listening to port ${PORT}`);
});  
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    }); 