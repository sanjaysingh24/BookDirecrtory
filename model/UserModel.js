import mongoose from "mongoose";
import {Book} from './BookModel.js';
const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,

    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address`,
    },
    required: [true, "User email is requried"],
  },

phone:{
    type:String,
    required: [true, "User Number is required"],
    validate:{
        validator:function(v){
            return /^[0-9]{10}$/ .test(v);
        },
        message:(props)=>`${props.value} is not a valid phone number`
    }

},

  password: { type: String,


required:[true,"User password is required"],
},
// take a  reference from the Book model
Books:[{
type:mongoose.Schema.Types.ObjectId,
ref:'Book'
}]

});

export const User = mongoose.model("User",UserSchema);
