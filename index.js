import express, { request } from 'express';
import { PORT, MONGODB_URI } from './config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (request, response) => {
    console.log('Received a request');
    return response.status(200).send('Hello World!');
});

// route handlers would go here
app.get('/books', (request, response) => {
    // Placeholder for fetching books from the database
    try {
        if (
            request.query.author && request.query.author === 'Unknown'
            request.query.year && parseInt(request.query.year) < 2000
            request.query.genre && request.query.genre === 'Fiction'
        ) {
            const books = [
                { title: 'Mystery of the Old House', author: 'Unknown', year: 1995, genre: 'Fiction' },
                { title: 'Adventures in the Dark', author: 'Unknown', year: 1988, genre: 'Fiction' }
            ];
            return response.status(200).json(books);
        }
    
        )
    } catch (error) {
        console.error('Error fetching books:', error);
        return response.status(500).send('Internal Server Error');
    }

newBooks = {
        title: request.body.title,
        author: request.body.author,
        publishedDate: request.body.publishedDate,
        pages: request.body.pages
    }

const book = new Book(newBooks);

return response.status(200).json(book);
catch (error) {
        console.error('Error creating book:', error);
        return response.status(500).send('Internal Server Error');
    }

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