// modules
import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import 'dotenv/config'
import mongoose from 'mongoose';
import {userRouter} from './Routes/UserRoute.js';

// declare all the constants
const app = express();
const port = process.env.PORT||3000;
console.log(process.env.PORT);


// declare middlewares functions
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



// connect mongodb 

main().catch((err)=>console.log(err));
async function main(){
    mongoose.connect(process.env.MONGOURL);
    console.log('connect successfully');
}


// routes
app.use('/user',userRouter);
app.get('/',(req,res)=>{
    res.json({success:true});
})























app.listen(port,()=>{
    console.log('listening on port');
    
})