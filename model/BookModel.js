import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    publicationyear:{type:String, required:true},
    genre:{type:String, required:true},
    publisher:{type:String, required:true},

})
export const Book = mongoose.model('Book',BookSchema);