// modules
import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import 'dotenv/config'
import mongoose from 'mongoose';
import {userRouter} from './Routes/UserRoute.js';
import { bookRouter } from './Routes/BookRoute.js';
import { Book } from './model/BookModel.js';
import multer from 'multer';
// declare all the constants
const app = express();
const port = 4000;
console.log(process.env.PORT);
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// declare middlewares functions
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



// connect mongodb 

main().catch((err)=>console.log(err));
async function main(){
    mongoose.connect(process.env.MONGODBURL);
    console.log('connect successfully');
}


// routes
app.use('/user',userRouter);
app.use('/books',bookRouter);

app.get('/',(req,res)=>{
    res.render('Index.ejs')
})
app.get('/register',(req,res)=>{
    res.render('Register.ejs');
})
app.get('/home',async (req,res)=>{
    const data = await Book.find({});
    res.render('Home.ejs',{data:data});
})
app.get('/AddBook',(req,res)=>{
    res.render('AddBook.ejs');
})























app.listen(port,()=>{
    console.log('listening on port');
    
})