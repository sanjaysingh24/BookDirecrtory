import express from 'express';
import { Addbook,getAllbook,getBook ,replaceBook,updateBook,deleteBook } from '../Controller/BookController.js';
export const bookRouter = express.Router();
bookRouter.post('/AddBook',Addbook)
.get('/getAllbook', getAllbook)
.get('/getbook/:id',getBook)
.put('/replaceBook/:id',replaceBook)
.patch('/updateBook/:id',updateBook)
.delete('/deleteBook/:id',deleteBook);